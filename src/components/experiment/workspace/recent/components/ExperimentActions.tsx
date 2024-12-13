import React from 'react';
import { FileUp, Share2, MoreVertical, Trash2 } from 'lucide-react';

interface ExperimentActionsProps {
  onUpload: (e: React.MouseEvent) => void;
  onShare: (e: React.MouseEvent) => void;
  onDelete: (e: React.MouseEvent) => void;
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
}

export function ExperimentActions({
  onUpload,
  onShare,
  onDelete,
  showMenu,
  setShowMenu
}: ExperimentActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={onUpload}
        className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
        title="上传数据"
      >
        <FileUp className="h-4 w-4" />
      </button>
      <button 
        onClick={onShare}
        className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
        title="分享实验"
      >
        <Share2 className="h-4 w-4" />
      </button>
      <div className="relative">
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          <MoreVertical className="h-4 w-4" />
        </button>
        {showMenu && (
          <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
            <button 
              onClick={onDelete}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
              <span>删除实验</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}