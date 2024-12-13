import React from 'react';
import { Grid, List } from 'lucide-react';
import type { ViewMode } from '../../types';

interface ViewModeToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export function ViewModeToggle({ viewMode, onViewModeChange }: ViewModeToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onViewModeChange('grid')}
        className={`p-2 rounded-lg ${
          viewMode === 'grid'
            ? 'bg-blue-50 text-blue-600'
            : 'text-gray-500 hover:bg-gray-50'
        }`}
        title="网格视图"
      >
        <Grid className="h-5 w-5" />
      </button>
      <button
        onClick={() => onViewModeChange('table')}
        className={`p-2 rounded-lg ${
          viewMode === 'table'
            ? 'bg-blue-50 text-blue-600'
            : 'text-gray-500 hover:bg-gray-50'
        }`}
        title="列表视图"
      >
        <List className="h-5 w-5" />
      </button>
    </div>
  );
}