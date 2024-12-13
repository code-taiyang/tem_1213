import React from 'react';
import { ExperimentLayout } from './layout/ExperimentLayout';
import { ExperimentProvider } from './context/ExperimentContext';
import { ExperimentWorkspace } from './workspace/ExperimentWorkspace';

export function ExperimentAssistant() {
  return (
    <ExperimentProvider>
      <ExperimentLayout>
        <ExperimentWorkspace />
      </ExperimentLayout>
    </ExperimentProvider>
  );
}