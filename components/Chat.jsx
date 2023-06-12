import React from 'react'
import ChatBubble from './ChatBubble'
import MessageBar from './MessageBar'

const Chat = () => {
  const messages = [
    { content: 'Hello!', isUser: true },
    { content: 'Hi there!', isUser: false },
    { content: 'How can I assist you?', isUser: true },
    { content: 'I have a question.', isUser: false },
    { content: 'Sure, go ahead!', isUser: true },
    {
      content:
        "In React, you can define the style of a React element using inline styles or by applying CSS classes to the element. Here's how you can define the style of a React element using different approaches:",
      isUser: false,
    },
    { content: 'Could you please provide more details?', isUser: true },
    { content: 'I have a question.', isUser: false },
    { content: 'Sure, go ahead!', isUser: true },
    { content: 'I have a question.', isUser: false },
    { content: 'Sure, go ahead!', isUser: true },
    { content: 'I have a question.', isUser: false },
    { content: 'Sure, go ahead!', isUser: true },
    { content: 'I have a question.', isUser: false },
    { content: 'Sure, go ahead!', isUser: true },
    { content: 'I have a question.', isUser: false },
    { content: 'Sure, go ahead!', isUser: true },
  ]

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      <div className="flex-1 overflow-hidden">
        <div className="scrollable-content">
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
              message={message.content}
              isUser={message.isUser}
            />
          ))}
          <div className='group h-56 w-full border-b bg-gray-800 dark-border-900 bg-gray-800'></div>
        </div>
      </div>
      <MessageBar />
    </div>
  )
}

export default Chat
