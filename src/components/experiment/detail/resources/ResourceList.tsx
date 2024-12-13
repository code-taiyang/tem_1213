import React from 'react';
import { FileText, Database, Settings, Activity } from 'lucide-react';
import { SelectedResource } from '../ExperimentDetail';

interface ResourceListProps {
  isNewExperiment: boolean;
  sectionId: string;
  selectedResource: SelectedResource | null;
  onResourceSelect: (resource: SelectedResource) => void;
}

export function ResourceList({ 
  isNewExperiment, 
  sectionId,
  selectedResource,
  onResourceSelect 
}: ResourceListProps) {
  const getSectionResources = (sectionId: string) => {
    switch (sectionId) {
      case 'design':
        return [
          {
            id: '1',
            type: 'step',
            title: '实验方案设计',
            description: '设计实验流程和参数',
            icon: Settings,
            status: 'pending'
          },
          {
            id: '2',
            type: 'step',
            title: '实验条件优化',
            description: '优化实验参数和条件',
            icon: Activity,
            status: 'pending'
          }
        ];
      case 'data':
        return [
          {
            id: '3',
            type: 'data',
            title: '数据采集方案',
            description: '制定数据采集计划',
            icon: Database,
            status: 'pending'
          }
        ];
      case 'analysis':
        return [
          {
            id: '4',
            type: 'data',
            title: '数据分析方案',
            description: '设计数据分析方法',
            icon: Activity,
            status: 'pending'
          }
        ];
      case 'report':
        return [
          {
            id: '5',
            type: 'report',
            title: '实验报告模板',
            description: '选择报告模板格式',
            icon: FileText,
            status: 'pending'
          }
        ];
      default:
        return [];
    }
  };

  const resources = getSectionResources(sectionId);

  return (
    <div className="space-y-2">
      {resources.map((resource) => (
        <div
          key={resource.id}
          onClick={() => onResourceSelect({ ...resource, sectionId })}
          className={`p-3 rounded-lg cursor-pointer transition-colors ${
            selectedResource?.id === resource.id
              ? 'bg-blue-50 ring-1 ring-blue-500'
              : 'hover:bg-gray-50'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gray-100">
              <resource.icon className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                {resource.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {resource.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}