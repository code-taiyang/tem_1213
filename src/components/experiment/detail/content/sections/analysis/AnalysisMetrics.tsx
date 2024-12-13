import React from 'react';
import { Activity, TrendingUp, PieChart, BarChart2 } from 'lucide-react';

export function AnalysisMetrics() {
  const metrics = [
    {
      title: '数据点数',
      value: '1,284',
      change: '+12.5%',
      trend: 'up',
      icon: Activity,
      color: 'blue'
    },
    {
      title: '有效数据率',
      value: '96.8%',
      change: '+3.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: '异常值比例',
      value: '2.3%',
      change: '-1.5%',
      trend: 'down',
      icon: PieChart,
      color: 'purple'
    },
    {
      title: '数据完整度',
      value: '98.5%',
      change: '+0.8%',
      trend: 'up',
      icon: BarChart2,
      color: 'orange'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric) => (
        <div key={metric.title} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
            <metric.icon className={`h-5 w-5 text-${metric.color}-500`} />
          </div>
          <p className="mt-2 text-2xl font-semibold text-gray-900">{metric.value}</p>
          <p className={`mt-1 text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {metric.change} 较上周
          </p>
        </div>
      ))}
    </div>
  );
}