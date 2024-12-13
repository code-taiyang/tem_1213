import React from 'react';
import { 
  Layout, 
  TestTube, 
  FileText, 
  Database, 
  Settings,
  BookOpen
} from 'lucide-react';

export function ExperimentSidebar() {
  const navigation = [
    { name: '工作台', icon: Layout },
    { name: '实验管理', icon: TestTube },
    { name: '实验报告', icon: FileText },
    { name: '数据分析', icon: Database },
    { name: '知识库', icon: BookOpen },
    { name: '设置', icon: Settings }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
          <nav className="px-3 py-4 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900"
              >
                <item.icon className="h-5 w-5" />
                <span className="flex-1 text-left">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}