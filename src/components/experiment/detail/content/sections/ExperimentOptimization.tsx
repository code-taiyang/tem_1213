import React from 'react';
import { Settings, TrendingUp, Target, Sliders, History, AlertTriangle } from 'lucide-react';
import { SelectedResource } from '../../ExperimentDetail';

interface ExperimentOptimizationProps {
  resource: SelectedResource;
}

export function ExperimentOptimization({ resource }: ExperimentOptimizationProps) {
  return (
    <div className="space-y-6">
      {/* Current Parameters */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">当前实验参数</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
            <History className="h-4 w-4" />
            <span>历史记录</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">反应温度</span>
              <Settings className="h-4 w-4 text-blue-500" />
            </div>
            <div className="mt-2">
              <span className="text-2xl font-semibold text-gray-900">120°C</span>
              <span className="ml-2 text-sm text-green-600">最佳范围: 115-125°C</span>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">反应压力</span>
              <Sliders className="h-4 w-4 text-blue-500" />
            </div>
            <div className="mt-2">
              <span className="text-2xl font-semibold text-gray-900">2.5 MPa</span>
              <span className="ml-2 text-sm text-green-600">最佳范围: 2.3-2.7 MPa</span>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">反应时间</span>
              <Target className="h-4 w-4 text-blue-500" />
            </div>
            <div className="mt-2">
              <span className="text-2xl font-semibold text-gray-900">4.0 h</span>
              <span className="ml-2 text-sm text-green-600">最佳范围: 3.5-4.5 h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Optimization Analysis */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">优化分析</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-green-100">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h4 className="text-base font-medium text-gray-900">参数敏感性分析</h4>
              <p className="mt-1 text-sm text-gray-600">
                根据历史数据分析，温度对产品质量的影响最显著，其次是反应时间，压力的影响相对较小。
              </p>
              <div className="mt-3 flex gap-3">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '80%' }} />
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap">温度影响: 80%</span>
              </div>
              <div className="mt-2 flex gap-3">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '60%' }} />
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap">时间影响: 60%</span>
              </div>
              <div className="mt-2 flex gap-3">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500" style={{ width: '40%' }} />
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap">压力影响: 40%</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-yellow-100">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <h4 className="text-base font-medium text-gray-900">潜在风险分析</h4>
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <p className="text-sm text-gray-600">
                    温度超过130°C可能导致产物分解
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  <p className="text-sm text-gray-600">
                    反应时间过短会影响结晶度
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <p className="text-sm text-gray-600">
                    压力波动可能影响产物形貌
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optimization Suggestions */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">优化建议</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="text-sm font-medium text-blue-900">短期优化</h4>
            <ul className="mt-2 space-y-2">
              <li className="text-sm text-blue-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                将反应温度调整至120±2°C范围内
              </li>
              <li className="text-sm text-blue-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                延长反应时间至4小时以提高结晶度
              </li>
              <li className="text-sm text-blue-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                增加压力监测频率，保持稳定
              </li>
            </ul>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="text-sm font-medium text-purple-900">长期优化</h4>
            <ul className="mt-2 space-y-2">
              <li className="text-sm text-purple-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                开发温度自动控制系统
              </li>
              <li className="text-sm text-purple-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                建立实时监测平台
              </li>
              <li className="text-sm text-purple-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                优化反应釜设计，提高传热效率
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}