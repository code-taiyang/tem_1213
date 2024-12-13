import React from 'react';
import { BarChart2 } from 'lucide-react';
import { SelectedResource } from '../ExperimentDetail';
import { DataVisualization } from './sections/DataVisualization';
import { ExperimentSteps } from './sections/ExperimentSteps';
import { ExperimentOptimization } from './sections/ExperimentOptimization';
import { ReportContent } from './sections/ReportContent';
import { AnalysisResults } from './sections/AnalysisResults';
import { ReferenceContent } from './sections/ReferenceContent';

interface ResourceContentProps {
  isNewExperiment: boolean;
  selectedResource: SelectedResource | null;
}

export function ResourceContent({ isNewExperiment, selectedResource }: ResourceContentProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6">
        {!selectedResource ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <BarChart2 className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              选择实验资源
            </h3>
            <p className="text-gray-500 max-w-md">
              从左侧选择要查看的实验资源，这里将显示详细的内容、数据和操作选项
            </p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {selectedResource.title === '实验方案设计' && <ExperimentSteps resource={selectedResource} />}
            {selectedResource.title === '实验条件优化' && <ExperimentOptimization resource={selectedResource} />}
            {selectedResource.type === 'data' && <DataVisualization resource={selectedResource} />}
            {selectedResource.type === 'report' && <ReportContent resource={selectedResource} />}
            {selectedResource.type === 'reference' && <ReferenceContent resource={selectedResource} />}
            {selectedResource.sectionId === 'analysis' && <AnalysisResults resource={selectedResource} />}
          </div>
        )}
      </div>
    </div>
  );
}