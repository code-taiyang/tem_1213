import React from 'react';
import { 
  BarChart2, 
  Calculator, 
  Brain, 
  LineChart,
  Gauge,
  Workflow,
  PieChart,
  Zap,
  Activity,
  TrendingUp,
  Layers,
  FlaskConical
} from 'lucide-react';
import { AnalysisToolCard } from './AnalysisToolCard';

export function AnalysisSection() {
  const analysisTools = {
    statistical: {
      title: '统计分析工具',
      tools: [
        {
          id: 'integrated-analysis',
          title: 'SPSS/R/Python集成分析',
          description: '集成常用的统计软件包，支持各种统计分析',
          icon: BarChart2,
          color: 'blue',
          features: ['t检验', '卡方检验', 'ANOVA分析', '多元回归']
        },
        {
          id: 'variance-analysis',
          title: '方差分析工具',
          description: '进行多组数据比较，检查不同条件下的变化',
          icon: Calculator,
          color: 'purple',
          features: ['单因素分析', '多因素分析', '交互效应', '效应量计算']
        },
        {
          id: 'regression-analysis',
          title: '回归分析工具',
          description: '用于回归模型分析，发现变量间的关系',
          icon: LineChart,
          color: 'green',
          features: ['线性回归', '非线性回归', '多元回归', '模型诊断']
        }
      ]
    },
    machinelearning: {
      title: '机器学习与预测工具',
      tools: [
        {
          id: 'prediction-model',
          title: '预测模型工具',
          description: '根据已有数据和假设构建预测模型',
          icon: Brain,
          color: 'orange',
          features: ['模型训练', '参数优化', '结果预测', '模型评估']
        },
        {
          id: 'ml-modeling',
          title: '机器学习建模工具',
          description: '集成常用机器学习算法，提供自定义建模功能',
          icon: Workflow,
          color: 'indigo',
          features: ['决策树', 'SVM', '神经网络', '集成学习']
        },
        {
          id: 'anomaly-detection',
          title: '异常值检测工具',
          description: '基于机器学习算法，自动检测实验数据中的异常值',
          icon: Activity,
          color: 'rose',
          features: ['异常检测', '阈值优化', '实时监控', '报警提醒']
        }
      ]
    },
    visualization: {
      title: '数据可视化工具',
      tools: [
        {
          id: 'dynamic-visualization',
          title: '动态数据可视化',
          description: '生成交互式图表和数据仪表板',
          icon: PieChart,
          color: 'blue',
          features: ['实时更新', '交互操作', '多维展示', '导出分享']
        },
        {
          id: 'correlation-analysis',
          title: '热图与散点图工具',
          description: '用于展示实验数据之间的关系',
          icon: Layers,
          color: 'purple',
          features: ['相关性分析', '聚类展示', '趋势分析', '模式识别']
        },
        {
          id: 'trend-analysis',
          title: '数据趋势分析',
          description: '展示实验结果的时间趋势和变化趋势',
          icon: TrendingUp,
          color: 'green',
          features: ['时序分析', '趋势预测', '周期识别', '拐点检测']
        }
      ]
    },
    optimization: {
      title: '实验优化工具',
      tools: [
        {
          id: 'design-optimization',
          title: '实验设计优化',
          description: '智能化推荐最佳实验设计方案',
          icon: FlaskConical,
          color: 'orange',
          features: ['参数优化', '条件筛选', '方案推荐', '成本评估']
        },
        {
          id: 'sensitivity-analysis',
          title: '灵敏度分析工具',
          description: '测试不同因素对实验结果的影响',
          icon: Gauge,
          color: 'indigo',
          features: ['因素分析', '敏感性测试', '影响评估', '优化建议']
        },
        {
          id: 'simulation-tool',
          title: '实验仿真工具',
          description: '对实验进行虚拟仿真，预测结果',
          icon: Zap,
          color: 'rose',
          features: ['模型构建', '参数调整', '结果预测', '方案验证']
        }
      ]
    }
  };

  return (
    <div className="space-y-8">
      {Object.entries(analysisTools).map(([key, section]) => (
        <div key={key} className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.tools.map((tool) => (
              <AnalysisToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}