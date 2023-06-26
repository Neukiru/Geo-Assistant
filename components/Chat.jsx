import React from 'react'
import { useState, useEffect, useRef } from 'react'
import ChatBubble from './ChatBubble'
import MessageBar from './MessageBar'

const Chat = ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages)
  const [initialLoad, setInitialLoad] = useState(true)
  const scrollRef = useRef(null)

  const addMessage = (newMessage, isUser, knowledgeContext) => {
    if (initialLoad) setInitialLoad(false)
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: newMessage, isUser: isUser, knowledgeContext: knowledgeContext },
    ])
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
              key={index}
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
      <MessageBar onNewMessage={addMessage} />
    </div>
  )
}

export default Chat
