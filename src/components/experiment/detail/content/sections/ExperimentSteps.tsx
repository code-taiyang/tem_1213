import React from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { SelectedResource } from '../../ExperimentDetail';

interface ExperimentStepsProps {
  resource: SelectedResource;
}

export function ExperimentSteps({ resource }: ExperimentStepsProps) {
  const steps = [
    {
      id: 1,
      title: '样品准备',
      description: '准备实验所需的原料和仪器设备',
      status: 'completed',
      time: '2024-03-15 09:00',
      notes: '已完成所有原料和设备的准备工作'
    },
    {
      id: 2,
      title: '实验条件设置',
      description: '设置实验温度、压力等参数',
      status: 'in_progress',
      time: '2024-03-15 10:30',
      notes: '正在进行温度和压力的调节'
    },
    {
      id: 3,
      title: '数据采集',
      description: '记录实验过程中的各项数据',
      status: 'pending',
      time: '2024-03-15 14:00',
      notes: '等待实验条件稳定后开始采集数据'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'in_progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flow-root">
        <ul className="-mb-8">
          {steps.map((step, stepIdx) => (
            <li key={step.id}>
              <div className="relative pb-8">
                {stepIdx !== steps.length - 1 ? (
                  <span
                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center ring-8 ring-white">
                      {getStatusIcon(step.status)}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {step.description}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        {step.notes}
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime={step.time}>{step.time}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}