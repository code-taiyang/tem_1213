import React from 'react';
import { ExperimentHeader } from './ExperimentHeader';

interface ExperimentLayoutProps {
  children: React.ReactNode;
}

export function ExperimentLayout({ children }: ExperimentLayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <ExperimentHeader />
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}