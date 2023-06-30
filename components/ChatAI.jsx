import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ChatBubble from './ChatBubble'
import MessageBar from './MessageBar'
import ModelSelector from './ModelSelector'
import socketIOClient from 'socket.io-client'

const ENDPOINT = 'https://geo-assistant-backend.onrender.com/'
// const ENDPOINT = 'http://localhost:8000'

const Chat = ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages)
  const [initialLoad, setInitialLoad] = useState(true)
  const [socket, setSocket] = useState(null)
  const [isModelSelectorVisible,setModelSelectorVisible] = useState(true)
  const scrollRef = useRef(null)
  const isUser = true

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, { path: '/ws/socket.io/' })

    socket.on('connect', () => {
      console.log('Connected to the Socket.IO server')
      socket.emit('initialize_agent')
    })

    socket.on('assistant_response', (serverMessage) => {
      setMessages((prevMessages) => {
        let newMessages = [...prevMessages]
        console.log(serverMessage['message_end'])
        if (newMessages.length > 0) {
          let lastMessage = { ...newMessages[newMessages.length - 1] }
          lastMessage.content = lastMessage.content + serverMessage['message']
          lastMessage.isBlinking = !serverMessage['message_end']
          newMessages[newMessages.length - 1] = lastMessage
        } else {
          newMessages.push({
            content: serverMessage['message'],
            isUser: false,
            knowledgeContext: {},
            isBlinking: serverMessage['blinking'],
          })
        }

        return newMessages
      })
    })

    socket.on('disconnect', () => {
      console.log('Socket.IO connection closed')
    })

    setSocket(socket)
  }, [])

  const addMessage = (newMessage, isUser, knowledgeContext, isBlinking) => {
    if (initialLoad) setInitialLoad(false)
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        content: newMessage,
        isUser: isUser,
        knowledgeContext: knowledgeContext,
        isBlinking: isBlinking,
      },
    ])

    // Send message to backend if it's from user
    if (isUser && socket) {
      socket.emit('message', { message: newMessage })
    }
  }

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (scrollRef.current !== null && !initialLoad) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, initialLoad])

  return (
    <div className="relative flex h-auto flex-col overflow-hidden">
      <div className="relative flex-1 overflow-hidden">
        <div className="scrollable-content static relative">
          <div className="flex items-center justify-center">
          <ModelSelector 
          isModelSelectorVisible={isModelSelectorVisible} />
          </div>
          {messages.map((message, index) => (
            <ChatBubble
              key={`${index}-${message.content}`}
              message={message.content}
              isUser={message.isUser}
              knowledgeContext={message.knowledgeContext}
              isBlinking={message.isBlinking ? true : false}
            />
          ))}
          <div
            ref={scrollRef}
            className="group h-56 w-full border-none bg-gray-800"
          ></div>
        </div>
      </div>
      <MessageBar
        onNewMessage={addMessage}
        onSetModelSelectorVisible={setModelSelectorVisible}
        isUser={isUser}
        requiresReponse={true}
      />
    </div>
  )
}

export default Chat
