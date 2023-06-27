import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ChatBubble from './ChatBubble'
import MessageBar from './MessageBar'
import socketIOClient from 'socket.io-client'

const ENDPOINT = 'http://localhost:8000'

const Chat = ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages)
  const [initialLoad, setInitialLoad] = useState(true)
  const [socket, setSocket] = useState(null)
  const scrollRef = useRef(null)
  const isUser = true

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, { path: '/ws/socket.io/' })

    socket.on('connect', () => {
      console.log('Connected to the Socket.IO server')
    })

    socket.on('assistant_response', (serverMessage) => {
      if (serverMessage['message_start']) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            content: serverMessage['message'],
            isUser: false,
            knowledgeContext: {},
          },
        ])
      } else {
        setMessages((prevMessages) => {
          let newMessages = [...prevMessages]

          if (newMessages.length > 0) {
            let lastMessage = { ...newMessages[newMessages.length - 1] }
            lastMessage.content = lastMessage.content + serverMessage['message']
            newMessages[newMessages.length - 1] = lastMessage
          } else {
            newMessages.push({
              content: serverMessage['message'],
              isUser: false,
              knowledgeContext: {},
            })
          }

          return newMessages
        })
      }
    })

    socket.on('disconnect', () => {
      console.log('Socket.IO connection closed')
    })

    setSocket(socket)
  }, [])

  const addMessage = (newMessage, isUser, knowledgeContext) => {
    if (initialLoad) setInitialLoad(false)
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        content: newMessage,
        isUser: isUser,
        knowledgeContext: knowledgeContext,
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
          {/* <div className='group w-full border-b bg-gray-800 dark-border-900' style={{"height":"65px"}}></div> */}
          {messages.map((message, index) => (
            <ChatBubble
              key={`${index}-${message.content}`}
              message={message.content}
              isUser={message.isUser}
              knowledgeContext={message.knowledgeContext}
            />
          ))}
          <div
            ref={scrollRef}
            className="dark-border-900 group h-56 w-full border-b bg-gray-800"
          ></div>
        </div>
      </div>
      <MessageBar onNewMessage={addMessage} isUser={isUser} />
    </div>
  )
}

export default Chat
