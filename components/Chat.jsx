import React from 'react';
import ChatBubble from './ChatBubble';

const Chat = () => {

  const messages = [
    { content: 'Hello!', isUser: true },
    { content: 'Hi there!', isUser: false },
    { content: 'How can I assist you?', isUser: true },
    { content: 'I have a question.', isUser: false },
    { content: 'Sure, go ahead!', isUser: true },
    { content: "In React, you can define the style of a React element using inline styles or by applying CSS classes to the element. Here's how you can define the style of a React element using different approaches:", isUser: false },
    { content: 'Could you please provide more details?', isUser: true },
  ];

  return (
    <div className="flex flex-col">
      {messages.map((message, index) => (
        <ChatBubble
          key={index}
          message={message.content}
          isUser={message.isUser}
        />
      ))}
    </div>
  );
};

export default Chat;
