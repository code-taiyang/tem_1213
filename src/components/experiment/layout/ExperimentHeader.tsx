import React from 'react';
import { Plus, Search, Bell } from 'lucide-react';
import { useExperiment } from '../context/ExperimentContext';

export function ExperimentHeader() {
  const { dispatch } = useExperiment();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">实验助手</h1>
            <p className="mt-1 text-sm text-gray-500">
              智能辅助实验设计、分析与优化
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索实验..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>

            <button 
              onClick={() => {/* Handle new experiment */}}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>新建实验</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}