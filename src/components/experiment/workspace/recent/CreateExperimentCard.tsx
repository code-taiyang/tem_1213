import React from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CreateExperimentCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/experiment/new');
  };

  return (
    <button
      onClick={handleClick}
      className="relative h-full min-h-[280px] bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-6 text-left border-2 border-dashed border-gray-200 hover:border-blue-500 group"
    >
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
          <Plus className="h-6 w-6 text-blue-600" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">新建实验</h3>
          <p className="mt-1 text-sm text-gray-500">
            创建新的实验项目并开始研究
          </p>
        </div>
      </div>
    </button>
  );
}