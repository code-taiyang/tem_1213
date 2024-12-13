import React, { useState } from 'react';
import { ExperimentListHeader } from './header/ExperimentListHeader';
import { ExperimentListToolbar } from './toolbar/ExperimentListToolbar';
import { ExperimentGrid } from './grid/ExperimentGrid';
import { ExperimentTable } from './table/ExperimentTable';
import { useExperiments } from './hooks/useExperiments';
import type { ViewMode, SortOption, FilterOptions } from './types';

export function ExperimentList() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { experiments, isLoading, filters, setFilters, sort, setSort } = useExperiments();

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
  };

  const handleSort = (option: SortOption) => {
    setSort(option);
  };

  const handleFilter = (options: FilterOptions) => {
    setFilters(options);
  };

  const handleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = (selected: boolean) => {
    setSelectedIds(selected ? experiments.map(exp => exp.id) : []);
  };

  const handleBatchDelete = () => {
    // 实现批量删除逻辑
    setSelectedIds([]);
  };

  const handleBatchExport = () => {
    // 实现批量导出逻辑
  };

  const handleBatchShare = () => {
    // 实现批量分享逻辑
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <ExperimentListHeader 
        selectedCount={selectedIds.length}
        onBatchDelete={handleBatchDelete}
        onBatchExport={handleBatchExport}
        onBatchShare={handleBatchShare}
      />
      
      <ExperimentListToolbar
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
        filters={filters}
        onFilter={handleFilter}
        sort={sort}
        onSort={handleSort}
      />

      {viewMode === 'grid' ? (
        <ExperimentGrid
          experiments={experiments}
          selectedIds={selectedIds}
          onSelect={handleSelect}
          isLoading={isLoading}
        />
      ) : (
        <ExperimentTable
          experiments={experiments}
          selectedIds={selectedIds}
          onSelect={handleSelect}
          onSelectAll={handleSelectAll}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}