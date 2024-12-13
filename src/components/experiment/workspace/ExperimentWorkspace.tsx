import React from 'react';
import { ExperimentOverview } from './overview/ExperimentOverview';
import { ExperimentTools } from './tools/ExperimentTools';
import { RecentExperiments } from './recent/RecentExperiments';

export function ExperimentWorkspace() {
  return (
    <div className="space-y-8">
      <ExperimentOverview />
      <RecentExperiments />
      <ExperimentTools />
    </div>
  );
}