import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ExperimentWarningProps {
  message: string;
}

export function ExperimentWarning({ message }: ExperimentWarningProps) {
  return (
    <div className="mt-4 flex items-center gap-2 text-sm text-yellow-700 bg-yellow-50 p-2 rounded-lg">
      <AlertTriangle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
}