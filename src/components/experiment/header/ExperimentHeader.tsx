import React from 'react';
import { Plus, TestTube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ExperimentHeader() {
  const navigate = useNavigate();

  const handleNewExperiment = () => {
    navigate('/experiment/new');
  };

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-900">实验助手</h1>
      
      <button 
        onClick={handleNewExperiment}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Plus size={20} />
        <span>新建实验</span>
      </button>
    </div>
  );
}