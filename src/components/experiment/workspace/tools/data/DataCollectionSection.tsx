import React from 'react';
import { 
  Wifi, 
  Database, 
  ClipboardList,
  Cloud,
  FilterX,
  GitBranch
} from 'lucide-react';
import { DataToolCard } from './DataToolCard';

export function DataCollectionSection() {
  const dataTools = {
    collection: {
      title: '数据采集工具',
      tools: [
        {
          id: 'sensor-interface',
          title: '传感器接口工具',
          description: '支持与实验室各类传感器进行连接，自动获取数据',
          icon: Wifi,
          color: 'blue',
          features: ['温度监测', '湿度检测', 'PH值测量', '光强度采集']
        },
        {
          id: 'instrument-collection',
          title: '仪器数据采集工具',
          description: '与实验仪器集成，自动记录实验数据',
          icon: Database,
          color: 'purple',
          features: ['光谱分析', '显微成像', '色谱数据', '自动记录']
        },
        {
          id: 'experiment-log',
          title: '实验日志记录工具',
          description: '实时记录实验操作过程中的各类信息',
          icon: ClipboardList,
          color: 'green',
          features: ['操作记录', '设备状态', '环境条件', '异常记录']
        }
      ]
    },
    management: {
      title: '数据存储与管理工具',
      tools: [
        {
          id: 'cloud-storage',
          title: '数据存储平台',
          description: '云端存储解决方案，保证数据安全性和可访问性',
          icon: Cloud,
          color: 'orange',
          features: ['云端备份', '安全加密', '快速访问', '协同共享']
        },
        {
          id: 'data-cleaning',
          title: '数据清洗工具',
          description: '自动化清洗和格式化实验数据，保证数据质量',
          icon: FilterX,
          color: 'indigo',
          features: ['噪声去除', '异常检测', '数据修复', '格式转换']
        },
        {
          id: 'version-control',
          title: '实验数据版本控制',
          description: '为每次实验和数据更新生成版本记录',
          icon: GitBranch,
          color: 'rose',
          features: ['版本追踪', '变更记录', '数据回溯', '协作管理']
        }
      ]
    }
  };

  return (
    <div className="space-y-8">
      {Object.entries(dataTools).map(([key, section]) => (
        <div key={key} className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.tools.map((tool) => (
              <DataToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}