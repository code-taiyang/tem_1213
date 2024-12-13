import React from 'react';
import { BarChart2, Download, Share2 } from 'lucide-react';

export function AnalysisHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-blue-100">
          <BarChart2 className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">数据分析方案</h3>
          <p className="text-sm text-gray-500">实验数据的分析与可视化</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
          <Download className="h-5 w-5" />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
          <Share2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}