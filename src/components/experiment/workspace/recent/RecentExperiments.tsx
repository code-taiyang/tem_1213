import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateExperimentCard } from './CreateExperimentCard';
import { ExperimentCard } from './ExperimentCard';
import { ArrowRight } from 'lucide-react';
import type { ExperimentData } from './types';

export function RecentExperiments() {
  const navigate = useNavigate();
  const [selectedExperimentId, setSelectedExperimentId] = useState<string | null>(null);

  const handleViewAll = () => {
    navigate('/experiments');
  };

  // ... 其余代码保持不变

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">最近实验</h2>
        <button 
          onClick={handleViewAll}
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          <span>查看全部</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* ... 其余代码保持不变 */}
    </div>
  );
}