import React from 'react';
import { 
  FileText, 
  BarChart2, 
  GitBranch, 
  BookOpen,
  FileSearch,
  Share2
} from 'lucide-react';
import { RecordToolCard } from './RecordToolCard';

export function RecordSection() {
  const recordTools = {
    report: {
      title: '实验报告自动生成',
      tools: [
        {
          id: 'report-generator',
          title: '实验报告生成器',
          description: '自动化生成包含实验目的、方法、结果、结论的实验报告',
          icon: FileText,
          color: 'blue',
          features: ['模板选择', '内容生成', '格式调整', '智能排版']
        },
        {
          id: 'chart-generator',
          title: '图表自动生成',
          description: '根据实验数据自动生成相应的图表，并在报告中嵌入',
          icon: BarChart2,
          color: 'purple',
          features: ['数据可视化', '图表美化', '动态更新', '交互展示']
        },
        {
          id: 'report-template',
          title: '报告模板库',
          description: '提供多种专业领域的报告模板，快速创建规范文档',
          icon: BookOpen,
          color: 'green',
          features: ['模板分类', '自定义模板', '格式导出', '批量处理']
        }
      ]
    },
    collaboration: {
      title: '报告协作工具',
      tools: [
        {
          id: 'citation-tool',
          title: '文献引用工具',
          description: '自动从文献库中提取引用，支持多种引用格式',
          icon: FileSearch,
          color: 'orange',
          features: ['APA格式', 'MLA格式', '引用管理', '智能推荐']
        },
        {
          id: 'version-control',
          title: '报告版本控制',
          description: '为报告生成版本记录，便于对比和追溯',
          icon: GitBranch,
          color: 'indigo',
          features: ['版本追踪', '变更对比', '协作编辑', '历史回溯']
        },
        {
          id: 'collaboration-platform',
          title: '协作平台',
          description: '支持团队成员实时协作编辑和审阅报告',
          icon: Share2,
          color: 'rose',
          features: ['实时编辑', '评论反馈', '任务分配', '进度追踪']
        }
      ]
    }
  };

  return (
    <div className="space-y-8">
      {Object.entries(recordTools).map(([key, section]) => (
        <div key={key} className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.tools.map((tool) => (
              <RecordToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}