import React, { useState } from 'react';
import { Beaker, Database, FileText, BarChart2 } from 'lucide-react';
import { ExperimentDesignSection } from './design/ExperimentDesignSection';
import { DataCollectionSection } from './data/DataCollectionSection';
import { RecordSection } from './record/RecordSection';
import { AnalysisSection } from './analysis/AnalysisSection';

export function ExperimentTools() {
  const [activeTab, setActiveTab] = useState('design');

  const tabs = [
    {
      id: 'design',
      label: '实验设计与规划',
      icon: Beaker,
    },
    {
      id: 'data',
      label: '数据采集与处理',
      icon: Database,
    },
    {
      id: 'record',
      label: '实验记录与文档',
      icon: FileText,
    },
    {
      id: 'analysis',
      label: '数据分析与预测',
      icon: BarChart2,
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">实验工具</h2>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap
                  ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'design' && <ExperimentDesignSection />}
          {activeTab === 'data' && <DataCollectionSection />}
          {activeTab === 'record' && <RecordSection />}
          {activeTab === 'analysis' && <AnalysisSection />}
        </div>
      </div>
    </div>
  );
}