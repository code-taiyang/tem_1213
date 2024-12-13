import React from 'react';
import { Database, Wifi, Clock, AlertTriangle, Settings, FileText } from 'lucide-react';

interface DataCollectionPlanProps {
  resource: any;
}

export function DataCollectionPlan({ resource }: DataCollectionPlanProps) {
  return (
    <div className="space-y-6">
      {/* Collection Overview */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100">
              <Database className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">数据采集方案</h3>
              <p className="text-sm text-gray-500">实验数据的采集与记录计划</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">采集频率</span>
              <Clock className="h-4 w-4 text-blue-500" />
            </div>
            <div className="mt-2">
              <span className="text-2xl font-semibold text-gray-900">5min</span>
              <span className="ml-2 text-sm text-gray-600">间隔</span>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">数据点数</span>
              <Database className="h-4 w-4 text-green-500" />
            </div>
            <div className="mt-2">
              <span className="text-2xl font-semibold text-gray-900">48</span>
              <span className="ml-2 text-sm text-gray-600">每批次</span>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">采集方式</span>
              <Wifi className="h-4 w-4 text-purple-500" />
            </div>
            <div className="mt-2">
              <span className="text-2xl font-semibold text-gray-900">自动</span>
              <span className="ml-2 text-sm text-gray-600">传感器</span>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Parameters */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">采集参数设置</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-900">基础参数</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">温度</span>
                  <span className="text-sm font-medium text-gray-900">0-200°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">压力</span>
                  <span className="text-sm font-medium text-gray-900">0-5MPa</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">pH值</span>
                  <span className="text-sm font-medium text-gray-900">1-14</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-900">高级参数</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">搅拌速度</span>
                  <span className="text-sm font-medium text-gray-900">0-1000rpm</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">流量</span>
                  <span className="text-sm font-medium text-gray-900">0-100mL/min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">浓度</span>
                  <span className="text-sm font-medium text-gray-900">0-1mol/L</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Processing */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">数据处理流程</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-blue-100">
              <Settings className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="text-base font-medium text-gray-900">预处理</h4>
              <ul className="mt-2 space-y-2">
                <li className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  数据过滤与去噪
                </li>
                <li className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  异常值检测与处理
                </li>
                <li className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  数据标准化
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-green-100">
              <FileText className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h4 className="text-base font-medium text-gray-900">格式转换</h4>
              <ul className="mt-2 space-y-2">
                <li className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  数据格式统一
                </li>
                <li className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  单位换算
                </li>
                <li className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  元数据添加
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-yellow-100">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <h4 className="text-base font-medium text-gray-900">质量控制</h4>
              <ul className="mt-2 space-y-2">
                <li className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  数据完整性检查
                </li>
                <li className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  准确性验证
                </li>
                <li className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                  一致性评估
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}