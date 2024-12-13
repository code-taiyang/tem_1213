import React, { useState } from 'react';
import { AIMessage } from './AIMessage';
import { AIInput } from './AIInput';

interface AIAssistantProps {
  isNewExperiment: boolean;
  onAIResponse: (response: AIResponse) => void;
  onUpload: () => void;
  uploadedFiles?: Array<{
    name: string;
    size: number;
    type: string;
    lastModified: number;
  }>;
}

export interface AIResponse {
  type: 'update_content' | 'update_parameters' | 'generate_report';
  sectionId: string;
  content?: any;
}

export function AIAssistant({ 
  isNewExperiment, 
  onAIResponse, 
  onUpload,
  uploadedFiles 
}: AIAssistantProps) {
  const [messages, setMessages] = useState([
    {
      id: '1',
      type: 'assistant' as const,
      content: isNewExperiment 
        ? '欢迎创建新实验！我可以帮你：\n- 设计实验方案\n- 优化实验参数\n- 分析实验数据\n请告诉我你想进行什么实验？'
        : '你好！我可以帮你：\n- 分析实验数据\n- 生成实验报告\n- 优化实验条件\n- 解答实验问题',
    }
  ]);

  const handleUserMessage = (content: string) => {
    const newMessages = [...messages, {
      id: String(messages.length + 1),
      type: 'user' as const,
      content
    }];

    const aiResponse = generateAIResponse(content);
    newMessages.push({
      id: String(newMessages.length + 1),
      type: 'assistant' as const,
      content: aiResponse.aiMessage
    });

    setMessages(newMessages);

    if (aiResponse.action) {
      onAIResponse(aiResponse.action);
    }
  };

  const generateAIResponse = (userInput: string): { aiMessage: string; action?: AIResponse } => {
    const input = userInput.toLowerCase();
    
    if (input.includes('优化') && input.includes('温度')) {
      return {
        aiMessage: '根据历史数据分析，我建议将反应温度调整到120±2°C范围内，这个温度范围可以获得最佳的转化率。我已经更新了实验参数设置。',
        action: {
          type: 'update_parameters',
          sectionId: 'design',
          content: {
            temperature: 120,
            pressue: 2.5,
            time: 4.0
          }
        }
      };
    }

    if (input.includes('分析') && input.includes('数据')) {
      return {
        aiMessage: '我已经对实验数据进行了分析，发现以下关键结果：\n1. 转化率平均值为87.6%\n2. 温度与转化率呈显著正相关\n3. 建议优化反应时间以提高产品收率\n\n详细分析结果已更新到数据分析部分。',
        action: {
          type: 'update_content',
          sectionId: 'analysis',
          content: {
            conversionRate: 87.6,
            correlation: 0.92,
            recommendation: '优化反应时间'
          }
        }
      };
    }

    if (input.includes('生成') && input.includes('报告')) {
      return {
        aiMessage: '我已根据实验数据和分析结果生成了实验报告，包含实验方法、结果分析和结论。您可以在报告部分查看和编辑。',
        action: {
          type: 'generate_report',
          sectionId: 'report',
          content: {
            title: '实验报告',
            sections: [
              { title: '实验方法', content: '...' },
              { title: '结果分析', content: '...' },
              { title: '结论', content: '...' }
            ]
          }
        }
      };
    }

    return {
      aiMessage: '我明白了。请告诉我您需要什么具体帮助？我可以协助优化实验参数、分析数据或生成报告。'
    };
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <AIMessage key={message.id} message={message} />
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <AIInput 
          onSend={handleUserMessage} 
          onUpload={onUpload}
          uploadedFiles={uploadedFiles}
        />
      </div>
    </div>
  );
}