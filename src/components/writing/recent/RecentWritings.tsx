import React from 'react';
import { ScrollText, Clock, ArrowRight } from 'lucide-react';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';
import { Link } from 'react-router-dom';

interface Writing {
  id: string;
  title: string;
  template: string;
  lastModified: string;
  status: 'draft' | 'in_progress' | 'completed';
  wordCount: number;
}

export function RecentWritings() {
  const writings: Writing[] = [
    {
      id: '1',
      title: '深度学习在气候预测中的应用研究',
      template: 'SCI论文',
      lastModified: '10分钟前',
      status: 'in_progress',
      wordCount: 3500
    },
    {
      id: '2',
      title: '基于神经网络的温度预测方法',
      template: '专利申请',
      lastModified: '2小时前',
      status: 'draft',
      wordCount: 1200
    },
    {
      id: '3',
      title: '气候变化预测模型的研究与应用',
      template: '基金申请',
      lastModified: '1天前',
      status: 'completed',
      wordCount: 5000
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">最近写作</h2>
        <Link 
          to="/activities?type=writing" 
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
        >
          <span>查看全部</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {writings.map((writing) => (
          <Card 
            key={writing.id}
            className="p-4 cursor-pointer hover:border-blue-200 transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-gray-50">
                <ScrollText className="text-blue-600" size={20} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-gray-900 truncate">
                    {writing.title}
                  </h3>
                  <Badge variant={
                    writing.status === 'completed' ? 'success' :
                    writing.status === 'in_progress' ? 'warning' : 'default'
                  }>
                    {writing.status === 'completed' ? '已完成' :
                     writing.status === 'in_progress' ? '写作中' : '草稿'}
                  </Badge>
                </div>

                <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                  <span>{writing.template}</span>
                  <span>{writing.wordCount} 字</span>
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                  <Clock size={14} />
                  <span>{writing.lastModified}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}