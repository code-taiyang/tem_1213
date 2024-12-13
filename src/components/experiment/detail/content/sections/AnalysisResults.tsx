import React from 'react';
import { BarChart2, TrendingUp, PieChart, Activity } from 'lucide-react';
import { SelectedResource } from '../../ExperimentDetail';

interface AnalysisResultsProps {
  resource: SelectedResource;
}

export function AnalysisResults({ resource }: AnalysisResultsProps) {
  return (
    <div className="space-y-6">
      {/* Analysis Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">样本数量</h3>
            <Activity className="h-5 w-5 text-blue-500" />
          </div>
          <p className="mt-2 text-2xl font-semibold text-gray-900">128</p>
          <p className="mt-1 text-sm text-green-600">+12.5% 较上周</p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">平均转化率</h3>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <p className="mt-2 text-2xl font-semibold text-gray-900">87.6%</p>
          <p className="mt-1 text-sm text-green-600">+3.2% 较上周</p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">实验成功率</h3>
            <PieChart className="h-5 w-5 text-purple-500" />
          </div>
          <p className="mt-2 text-2xl font-semibold text-gray-900">94.5%</p>
          <p className="mt-1 text-sm text-green-600">+1.8% 较上周</p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">数据完整度</h3>
            <BarChart2 className="h-5 w-5 text-orange-500" />
          </div>
          <p className="mt-2 text-2xl font-semibold text-gray-900">98.2%</p>
          <p className="mt-1 text-sm text-green-600">+0.5% 较上周</p>
        </div>
      </div>

      {/* Analysis Details */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">分析结果详情</h3>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h4 className="text-sm font-medium text-gray-900">关键发现</h4>
            <ul className="mt-2 space-y-2">
              <li className="text-sm text-gray-600">• 温度与转化率呈显著正相关 (R² = 0.92)</li>
              <li className="text-sm text-gray-600">• 最佳反应温度范围：115-125℃</li>
              <li className="text-sm text-gray-600">• 压力对产物形貌影响较小</li>
            </ul>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h4 className="text-sm font-medium text-gray-900">优化建议</h4>
            <ul className="mt-2 space-y-2">
              <li className="text-sm text-gray-600">• 建议将反应温度控制在120℃</li>
              <li className="text-sm text-gray-600">• 可适当延长反应时间以提高结晶度</li>
              <li className="text-sm text-gray-600">• 考虑增加搅拌速度以提高均匀性</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-900">后续实验计划</h4>
            <ul className="mt-2 space-y-2">
              <li className="text-sm text-gray-600">• 进一步研究pH值的影响</li>
              <li className="text-sm text-gray-600">• 探索不同前驱体配比的效果</li>
              <li className="text-sm text-gray-600">• 开展产物性能测试</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}