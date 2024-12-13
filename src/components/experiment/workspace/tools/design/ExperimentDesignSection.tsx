import React from 'react';
import { 
  Share2, 
  Settings, 
  GitBranch, 
  Lightbulb, 
  Calculator, 
  Brain 
} from 'lucide-react';
import { DesignToolCard } from './DesignToolCard';

export function ExperimentDesignSection() {
  const designTools = {
    experimentDesign: {
      title: '实验方案设计',
      tools: [
        {
          id: 'flow-designer',
          title: '实验流程设计器',
          description: '基于用户输入的研究目标，自动生成实验步骤流程图',
          icon: Share2,
          color: 'blue',
          features: ['拖拽调整', '步骤编辑', '流程验证', '自动优化']
        },
        {
          id: 'condition-optimizer',
          title: '实验条件优化器',
          description: '根据历史数据和领域经验，推荐最佳实验条件',
          icon: Settings,
          color: 'purple',
          features: ['参数优化', '条件推荐', '历史分析', '实时调整']
        },
        {
          id: 'group-comparison',
          title: '多组对比设计工具',
          description: '帮助设计多组实验对照组，自动计算样本量',
          icon: GitBranch,
          color: 'green',
          features: ['对照组设计', '样本量计算', '随机化方法', '分组优化']
        }
      ]
    },
    hypothesisTesting: {
      title: '实验假设与建模',
      tools: [
        {
          id: 'hypothesis-generator',
          title: '假设生成工具',
          description: '基于已知数据和文献，生成合理的实验假设',
          icon: Lightbulb,
          color: 'orange',
          features: ['假设生成', '文献分析', '验证建议', '优化方案']
        },
        {
          id: 'statistical-model',
          title: '统计模型构建工具',
          description: '帮助科研人员构建和校准实验的数学模型',
          icon: Calculator,
          color: 'indigo',
          features: ['回归分析', '方差分析', '模型校准', '参数估计']
        },
        {
          id: 'result-predictor',
          title: '实验结果预测工具',
          description: '使用机器学习模型预测实验结果',
          icon: Brain,
          color: 'rose',
          features: ['结果预测', '误差分析', '优化建议', '可视化展示']
        }
      ]
    }
  };

  return (
    <div className="space-y-8">
      {Object.entries(designTools).map(([key, section]) => (
        <div key={key} className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.tools.map((tool) => (
              <DesignToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}