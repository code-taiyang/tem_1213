import React, { useState } from 'react';
import { FileText, Database, Settings, Activity } from 'lucide-react';

export function ResourceTabs() {
  const [activeTab, setActiveTab] = useState('steps');

  const tabs = [
    { id: 'steps', label: '实验步骤', icon: Activity },
    { id: 'data', label: '实验数据', icon: Database },
    { id: 'reports', label: '实验报告', icon: FileText },
    { id: 'settings', label: '实验设置', icon: Settings },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex -mb-px">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2
              ${activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            <tab.icon className="h-4 w-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}