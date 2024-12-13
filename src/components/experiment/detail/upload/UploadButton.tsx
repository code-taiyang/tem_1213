import React from 'react';
import { Upload } from 'lucide-react';

interface UploadButtonProps {
  onUpload: () => void;
}

export function UploadButton({ onUpload }: UploadButtonProps) {
  return (
    <button
      onClick={onUpload}
      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
      title="上传数据"
    >
      <Upload size={20} />
      <span>上传数据</span>
    </button>
  );
}