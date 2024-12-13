import { useState, useEffect } from 'react';
import type { ExperimentData, SortOption, FilterOptions } from '../types';

const defaultFilters: FilterOptions = {
  status: [],
  timeRange: 'all',
  owner: [],
  dataStatus: [],
  search: ''
};

const defaultSort: SortOption = {
  field: 'updatedAt',
  order: 'desc'
};

export function useExperiments() {
  const [experiments, setExperiments] = useState<ExperimentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<FilterOptions>(defaultFilters);
  const [sort, setSort] = useState<SortOption>(defaultSort);

  useEffect(() => {
    const fetchExperiments = async () => {
      setIsLoading(true);
      try {
        // 模拟API调用延迟
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 模拟数据
        const mockData: ExperimentData[] = [
          {
            id: '1',
            title: '纳米材料合成实验',
            description: '研究不同温度条件下纳米材料的合成效果',
            status: 'in_progress',
            currentStep: 2,
            totalSteps: 5,
            stepName: '温度控制实验',
            lastModified: '10分钟前',
            progress: 65,
            owner: '张三',
            members: [
              { id: '1', name: '张三', avatar: 'https://i.pravatar.cc/150?img=1', status: 'in_progress' },
              { id: '2', name: '李四', avatar: 'https://i.pravatar.cc/150?img=2', status: 'completed' },
              { id: '3', name: '王五', avatar: 'https://i.pravatar.cc/150?img=3', status: 'pending' }
            ],
            recentData: {
              dataPoints: 128,
              completeness: 95,
              lastValue: '120',
              unit: '°C'
            }
          },
          {
            id: '2',
            title: '催化剂性能测试',
            description: '评估新型催化剂在不同反应条件下的性能',
            status: 'completed',
            currentStep: 5,
            totalSteps: 5,
            stepName: '数据分析',
            lastModified: '2小时前',
            progress: 100,
            owner: '李四',
            members: [
              { id: '2', name: '李四', avatar: 'https://i.pravatar.cc/150?img=2', status: 'completed' },
              { id: '4', name: '赵六', avatar: 'https://i.pravatar.cc/150?img=4', status: 'completed' }
            ]
          },
          {
            id: '3',
            title: '光谱分析实验',
            description: '使用拉曼光谱分析样品结构特征',
            status: 'warning',
            currentStep: 1,
            totalSteps: 4,
            stepName: '样品准备',
            lastModified: '1天前',
            progress: 25,
            owner: '王五',
            members: [
              { id: '3', name: '王五', avatar: 'https://i.pravatar.cc/150?img=3', status: 'in_progress' }
            ],
            hasWarning: true,
            warningMessage: '样品污染风险，请检查实验环境'
          }
        ];
        
        setExperiments(mockData);
      } catch (error) {
        console.error('Failed to fetch experiments:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExperiments();
  }, [filters, sort]);

  return {
    experiments,
    isLoading,
    filters,
    setFilters,
    sort,
    setSort
  };
}