import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, FileText, Database, Settings, Activity, BookOpen } from 'lucide-react';
import { SelectedResource } from '../ExperimentDetail';
import { ResourceContent } from '../content/ResourceContent';

interface UnifiedResourcesProps {
  isNewExperiment: boolean;
  selectedResource: SelectedResource | null;
  onResourceSelect: (resource: SelectedResource | null) => void;
}

interface Section {
  id: string;
  title: string;
  isOpen: boolean;
}

export function UnifiedResources({ 
  isNewExperiment, 
  selectedResource,
  onResourceSelect 
}: UnifiedResourcesProps) {
  const [sections, setSections] = useState<Section[]>([
    { id: 'design', title: '实验设计', isOpen: true },
    { id: 'data', title: '数据采集', isOpen: false },
    { id: 'analysis', title: '数据分析', isOpen: false },
    { id: 'report', title: '实验报告', isOpen: false },
    { id: 'references', title: '参考文献', isOpen: false }
  ]);

  useEffect(() => {
    if (!selectedResource) {
      const firstResource = {
        id: '1',
        type: 'step',
        title: '实验方案设计',
        sectionId: 'design'
      };
      onResourceSelect(firstResource);
    }
  }, [selectedResource, onResourceSelect]);

  const toggleSection = (sectionId: string) => {
    setSections(sections.map(section => 
      section.id === sectionId 
        ? { ...section, isOpen: !section.isOpen }
        : section
    ));
  };

  const getResourceList = (sectionId: string) => {
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
      case 'references':
        return [
          {
            id: '6',
            type: 'reference',
            title: '相关文献综述',
            description: '实验相关的研究文献',
            icon: BookOpen,
            status: 'pending'
          },
          {
            id: '7',
            type: 'reference',
            title: '实验方法参考',
            description: '相关实验方法文献',
            icon: BookOpen,
            status: 'pending'
          }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-medium text-gray-900">实验资源</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-[300px,1fr]">
          {/* Left Panel - Resource List */}
          <div className="border-r border-gray-200">
            {sections.map(section => (
              <div key={section.id} className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{section.title}</span>
                  {section.isOpen ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {section.isOpen && (
                  <div className="px-4 pb-4">
                    {getResourceList(section.id).map(resource => (
                      <div
                        key={resource.id}
                        onClick={() => onResourceSelect({ ...resource, sectionId: section.id })}
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
                )}
              </div>
            ))}
          </div>

          {/* Right Panel - Content */}
          <div className="min-h-0">
            <ResourceContent 
              isNewExperiment={isNewExperiment}
              selectedResource={selectedResource}
            />
          </div>
        </div>
      </div>
    </div>
  );
}