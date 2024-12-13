import React from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'assistant' | 'user';
  content: string;
}

interface AIMessageProps {
  message: Message;
}

export function AIMessage({ message }: AIMessageProps) {
  const isAssistant = message.type === 'assistant';

  return (
    <div className={`flex gap-3 ${isAssistant ? '' : 'flex-row-reverse'}`}>
      <div className={`
        flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
        ${isAssistant ? 'bg-blue-100' : 'bg-gray-100'}
      `}>
        {isAssistant ? (
          <Bot className="h-5 w-5 text-blue-600" />
        ) : (
          <User className="h-5 w-5 text-gray-600" />
        )}
      </div>
      <div className={`
        max-w-[80%] rounded-lg px-4 py-2 whitespace-pre-wrap
        ${isAssistant ? 'bg-gray-100' : 'bg-blue-100'}
      `}>
        <p className="text-sm text-gray-900">{message.content}</p>
      </div>
    </div>
  );
}