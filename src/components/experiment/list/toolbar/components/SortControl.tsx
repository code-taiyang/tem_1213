import React from 'react';
import { ArrowDownAZ } from 'lucide-react';
import type { SortOption } from '../../types';

interface SortControlProps {
  sort: SortOption;
  onSort: (sort: SortOption) => void;
}

export function SortControl({ sort, onSort }: SortControlProps) {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [field, order] = e.target.value.split('-') as [SortOption['field'], SortOption['order']];
    onSort({ field, order });
  };

  return (
    <div className="flex items-center gap-2">
      <ArrowDownAZ className="h-5 w-5 text-gray-400" />
      <select
        value={`${sort.field}-${sort.order}`}
        onChange={handleSortChange}
        className="text-sm border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="updatedAt-desc">最近更新</option>
        <option value="createdAt-desc">最近创建</option>
        <option value="title-asc">名称升序</option>
        <option value="title-desc">名称降序</option>
        <option value="progress-desc">进度降序</option>
        <option value="progress-asc">进度升序</option>
      </select>
    </div>
  );
}