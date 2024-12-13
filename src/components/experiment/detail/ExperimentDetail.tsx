import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { AIAssistant, AIResponse } from './assistant/AIAssistant';
import { UnifiedResources } from './resources/UnifiedResources';
import { ExperimentDetailHeader } from './header/ExperimentDetailHeader';
import { UploadDialog } from './upload/UploadDialog';

export interface SelectedResource {
  id: string;
  type: 'step' | 'data' | 'report' | 'reference';
  title: string;
  sectionId: string;
}

interface UploadedFile {
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

export function ExperimentDetail() {
  const { id } = useParams();
  const location = useLocation();
  const experimentData = location.state;
  const isNewExperiment = !id || id === 'new';
  
  const [selectedResource, setSelectedResource] = useState<SelectedResource | null>(null);
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(true);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [resourceContent, setResourceContent] = useState<any>(null);

  const handleAIResponse = (response: AIResponse) => {
    switch (response.type) {
      case 'update_parameters':
        setResourceContent(prev => ({
          ...prev,
          [response.sectionId]: {
            ...prev?.[response.sectionId],
            parameters: response.content
          }
        }));
        setSelectedResource({
          id: '1',
          type: 'step',
          title: '实验方案设计',
          sectionId: 'design'
        });
        break;

      case 'update_content':
        setResourceContent(prev => ({
          ...prev,
          [response.sectionId]: {
            ...prev?.[response.sectionId],
            content: response.content
          }
        }));
        setSelectedResource({
          id: '4',
          type: 'data',
          title: '数据分析方案',
          sectionId: response.sectionId
        });
        break;

      case 'generate_report':
        setResourceContent(prev => ({
          ...prev,
          [response.sectionId]: {
            ...prev?.[response.sectionId],
            report: response.content
          }
        }));
        setSelectedResource({
          id: '5',
          type: 'report',
          title: '实验报告',
          sectionId: 'report'
        });
        break;
    }
  };

  const handleUpload = (files: FileList) => {
    const newFiles = Array.from(files).map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified
    }));
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
    
    setResourceContent(prev => ({
      ...prev,
      data: {
        ...prev?.data,
        files: newFiles
      }
    }));

    setSelectedResource({
      id: '3',
      type: 'data',
      title: '数据采集方案',
      sectionId: 'data'
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <ExperimentDetailHeader 
        isNewExperiment={isNewExperiment}
        experimentData={experimentData}
        isAIAssistantOpen={isAIAssistantOpen}
        onToggleAIAssistant={() => setIsAIAssistantOpen(!isAIAssistantOpen)}
      />
      
      <div className="flex flex-1 overflow-hidden">
        {isAIAssistantOpen && (
          <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
            <AIAssistant 
              isNewExperiment={isNewExperiment} 
              onAIResponse={handleAIResponse}
              onUpload={() => setIsUploadDialogOpen(true)}
              uploadedFiles={uploadedFiles}
            />
          </div>
        )}

        <div className="flex-1 bg-white overflow-y-auto">
          <UnifiedResources 
            isNewExperiment={isNewExperiment}
            selectedResource={selectedResource}
            onResourceSelect={setSelectedResource}
            resourceContent={resourceContent}
          />
        </div>
      </div>

      <UploadDialog
        isOpen={isUploadDialogOpen}
        onClose={() => setIsUploadDialogOpen(false)}
        onUpload={handleUpload}
      />
    </div>
  );
}