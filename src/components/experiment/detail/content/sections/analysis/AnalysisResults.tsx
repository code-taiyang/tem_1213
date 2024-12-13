import React from 'react';
import { AnalysisHeader } from './AnalysisHeader';
import { AnalysisMetrics } from './AnalysisMetrics';
import { AnalysisCharts } from './AnalysisCharts';
import { AnalysisTable } from './AnalysisTable';
import { SelectedResource } from '../../../ExperimentDetail';

interface AnalysisResultsProps {
  resource: SelectedResource;
}

export function AnalysisResults({ resource }: AnalysisResultsProps) {
  return (
    <div className="space-y-6">
      <AnalysisHeader />
      <AnalysisMetrics />
      <AnalysisCharts />
      <AnalysisTable />
    </div>
  );
}