import React from 'react'
import { useState,useEffect,useRef } from 'react'
import ChatBubble from './ChatBubble'
import MessageBar from './MessageBar'

const Chat = ({initialMessages}) => {
  const [messages, setMessages] = useState(initialMessages)
  const [initialLoad, setInitialLoad] = useState(true)
  const scrollRef = useRef(null)

  const addMessage = (newMessage, isUser) => {
    if (initialLoad) setInitialLoad(false)
    setMessages(prevMessages => [...prevMessages, {content: newMessage, isUser: isUser}])
  }

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (scrollRef.current !== null && !initialLoad) {
      const timeoutId = setTimeout(() => {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
      }, 3000);
  
      return () => clearTimeout(timeoutId); // Clean up the timeout on unmount
    }
  }, [messages, initialLoad]);
  
  return (
    <div className="relative flex flex-col h-auto overflow-hidden">
      <div className="relative flex-1 overflow-hidden">
        <div className="static relative scrollable-content">
        {/* <div className='group w-full border-b bg-gray-800 dark-border-900' style={{"height":"65px"}}></div> */}
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
              message={message.content}
              isUser={message.isUser}
            />
          ))}
          <div ref={scrollRef} className='group h-56 w-full border-b bg-gray-800 dark-border-900'></div>
        </div>
      </div>
      <MessageBar onNewMessage={addMessage} />
    </div>
  )
}

export default Chat
