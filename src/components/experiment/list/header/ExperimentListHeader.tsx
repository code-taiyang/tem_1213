import React from 'react';
import { Trash2, Share2, Download, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { ExperimentListHeaderProps } from '../types';

export function ExperimentListHeader({
  selectedCount,
  onBatchDelete,
  onBatchExport,
  onBatchShare
}: ExperimentListHeaderProps) {
  const navigate = useNavigate();

  const handleNewExperiment = () => {
    navigate('/experiment/new');
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">全部实验</h1>
        <p className="mt-1 text-sm text-gray-500">
          管理和查看所有实验项目
        </p>
      </div>

      <div className="flex items-center gap-3">
        {selectedCount > 0 ? (
          <>
            <span className="text-sm text-gray-600">
              已选择 {selectedCount} 个实验
            </span>
            <button
              onClick={onBatchDelete}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <Trash2 className="h-4 w-4" />
              <span>删除</span>
            </button>
            <button
              onClick={onBatchExport}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <Download className="h-4 w-4" />
              <span>导出</span>
            </button>
            <button
              onClick={onBatchShare}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <Share2 className="h-4 w-4" />
              <span>分享</span>
            </button>
          </>
        ) : (
          <button
            onClick={handleNewExperiment}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>新建实验</span>
          </button>
        )}
      </div>
    </div>
  );
}