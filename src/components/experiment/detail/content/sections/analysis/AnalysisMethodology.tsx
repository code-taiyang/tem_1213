import React from 'react';
import { Brain, ChartBar, TrendingUp, GitBranch } from 'lucide-react';

export function AnalysisMethodology() {
  const methods = [
    {
      title: '统计分析',
      description: '使用统计学方法分析实验数据',
      icon: ChartBar,
      color: 'blue',
      techniques: [
        '描述性统计',
        '假设检验',
        '方差分析',
        '回归分析'
      ]
    },
    {
      title: '机器学习',
      description: '应用机器学习算法进行数据建模',
      icon: Brain,
      color: 'purple',
      techniques: [
        '聚类分析',
        '分类预测',
        '异常检测',
        '模式识别'
      ]
    },
    {
      title: '趋势分析',
      description: '研究数据随时间的变化规律',
      icon: TrendingUp,
      color: 'green',
      techniques: [
        '时间序列分析',
        '周期性分析',
        '趋势预测',
        '相关性分析'
      ]
    },
    {
      title: '对比研究',
      description: '与历史数据和文献进行对比',
      icon: GitBranch,
      color: 'orange',
      techniques: [
        '实验组对比',
        '文献对比',
        '历史数据对比',
        '标准对比'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {methods.map((method) => (
        <div key={method.title} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className={`p-2 rounded-lg bg-${method.color}-100`}>
              <method.icon className={`h-5 w-5 text-${method.color}-600`} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">{method.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{method.description}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {method.techniques.map((technique) => (
                  <div
                    key={technique}
                    className={`px-2 py-1 rounded-full text-xs font-medium bg-${method.color}-50 text-${method.color}-700`}
                  >
                    {technique}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}