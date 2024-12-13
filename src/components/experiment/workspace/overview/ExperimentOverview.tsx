import React from 'react';
import { BarChart2, Clock, Activity } from 'lucide-react';

export function ExperimentOverview() {
  const stats = [
    {
      name: '进行中实验',
      value: '12',
      change: '+2.1%',
      changeType: 'increase',
      icon: Activity,
    },
    {
      name: '实验完成率',
      value: '94.5%',
      change: '+3.2%',
      changeType: 'increase',
      icon: BarChart2,
    },
    {
      name: '平均实验时长',
      value: '2.4h',
      change: '-12.5%',
      changeType: 'decrease',
      icon: Clock,
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
        >
          <dt>
            <div className="absolute bg-blue-500 rounded-md p-3">
              <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 text-sm font-medium text-gray-500 truncate">
              {stat.name}
            </p>
          </dt>
          <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            <p
              className={`ml-2 flex items-baseline text-sm font-semibold ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.change}
            </p>
          </dd>
        </div>
      ))}
    </div>
  );
}