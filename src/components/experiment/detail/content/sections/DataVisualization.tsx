import React from 'react';
import { BarChart2, LineChart, PieChart } from 'lucide-react';
import { SelectedResource } from '../../ExperimentDetail';

interface DataVisualizationProps {
  resource: SelectedResource;
}

export function DataVisualization({ resource }: DataVisualizationProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">温度变化趋势</h3>
            <LineChart className="h-5 w-5 text-blue-500" />
          </div>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            图表区域
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">实验数据分布</h3>
            <BarChart2 className="h-5 w-5 text-green-500" />
          </div>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            图表区域
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-900">样本分类占比</h3>
            <PieChart className="h-5 w-5 text-purple-500" />
          </div>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            图表区域
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="font-medium text-gray-900 mb-4">数据详情</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  时间
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  温度 (°C)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  压力 (MPa)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  转化率 (%)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[...Array(5)].map((_, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-03-{String(index + 1).padStart(2, '0')} 09:00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {120 + index * 10}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {2.5 + index * 0.2}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {85 + index * 2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}