import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ResourceList } from './ResourceList';
import { SelectedResource } from '../ExperimentDetail';

interface ExperimentResourcesProps {
  isNewExperiment: boolean;
  selectedResource: SelectedResource | null;
  onResourceSelect: (resource: SelectedResource | null) => void;
}

interface Section {
  id: string;
  title: string;
  isOpen: boolean;
}

export function ExperimentResources({ 
  isNewExperiment, 
  selectedResource,
  onResourceSelect 
}: ExperimentResourcesProps) {
  const [sections, setSections] = useState<Section[]>([
    { id: 'design', title: '实验设计', isOpen: true },
    { id: 'data', title: '数据采集', isOpen: false },
    { id: 'analysis', title: '数据分析', isOpen: false },
    { id: 'report', title: '实验报告', isOpen: false }
  ]);

  // Auto-select first resource on mount
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

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-medium text-gray-900">实验资源</h2>
      </div>

      {/* Sections */}
      <div className="flex-1 overflow-y-auto">
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
                <ResourceList 
                  isNewExperiment={isNewExperiment}
                  sectionId={section.id}
                  selectedResource={selectedResource}
                  onResourceSelect={onResourceSelect}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}