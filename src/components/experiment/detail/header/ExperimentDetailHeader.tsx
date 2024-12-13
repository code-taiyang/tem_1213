import React from 'react';
import { ArrowLeft, Bot, History, Share2, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ExperimentDetailHeaderProps {
  isNewExperiment: boolean;
  experimentData: any;
  isAIAssistantOpen: boolean;
  onToggleAIAssistant: () => void;
}

export function ExperimentDetailHeader({ 
  isNewExperiment, 
  experimentData,
  isAIAssistantOpen,
  onToggleAIAssistant
}: ExperimentDetailHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/tools/experiment')}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title="返回实验列表"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              {isNewExperiment ? (experimentData?.title || '新建实验') : '纳米材料合成实验'}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={onToggleAIAssistant}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isAIAssistantOpen 
                  ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              title="AI助手"
            >
              <Bot size={20} />
              <span>AI助手</span>
            </button>
            <button 
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title="历史版本"
            >
              <History size={20} />
              <span>历史版本</span>
            </button>
            <button 
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title="分享"
            >
              <Share2 size={20} />
              <span>分享</span>
            </button>
            <button 
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title="导出"
            >
              <Download size={20} />
              <span>导出</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}