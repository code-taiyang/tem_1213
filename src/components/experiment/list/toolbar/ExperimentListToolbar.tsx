import React from 'react';
import { ViewModeToggle } from './components/ViewModeToggle';
import { FilterControls } from './components/FilterControls';
import { SortControl } from './components/SortControl';
import type { ViewMode, SortOption, FilterOptions } from '../types';

interface ExperimentListToolbarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  filters: FilterOptions;
  onFilter: (filters: FilterOptions) => void;
  sort: SortOption;
  onSort: (sort: SortOption) => void;
}

export function ExperimentListToolbar(props: ExperimentListToolbarProps) {
  const handleFilterChange = (key: keyof FilterOptions, value: string | string[]) => {
    props.onFilter({
      ...props.filters,
      [key]: value
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between gap-4">
        <ViewModeToggle
          viewMode={props.viewMode}
          onViewModeChange={props.onViewModeChange}
        />

        <div className="flex items-center gap-4">
          <FilterControls
            filters={props.filters}
            onFilterChange={handleFilterChange}
          />
          <SortControl
            sort={props.sort}
            onSort={props.onSort}
          />
        </div>
      </div>
    </div>
  );
}