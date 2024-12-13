import React from 'react';
import { LineChart, BarChart2, PieChart } from 'lucide-react';

export function AnalysisCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-gray-900">温度变化趋势</h3>
          <LineChart className="h-5 w-5 text-blue-500" />
        </div>
        <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
          <span className="text-sm text-gray-500">温度趋势图</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-gray-900">转化率分布</h3>
          <BarChart2 className="h-5 w-5 text-green-500" />
        </div>
        <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
          <span className="text-sm text-gray-500">转化率柱状图</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-gray-900">产品分布</h3>
          <PieChart className="h-5 w-5 text-purple-500" />
        </div>
        <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
          <span className="text-sm text-gray-500">产品分布饼图</span>
        </div>
      </div>
    </div>
  );
}