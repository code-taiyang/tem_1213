import React, { useState } from 'react';
import { X, Upload, FileText, AlertCircle } from 'lucide-react';

interface UploadDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (files: FileList) => void;
}

export function UploadDialog({ isOpen, onClose, onUpload }: UploadDialogProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  if (!isOpen) return null;

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles(e.target.files);
    }
  };

  const handleUpload = () => {
    if (selectedFiles) {
      onUpload(selectedFiles);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl">
        {/* Dialog Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">上传实验数据</h2>
            <p className="mt-1 text-sm text-gray-500">
              支持Excel、CSV、TXT等格式文件
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Upload Area */}
        <div className="p-6">
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`
              border-2 border-dashed rounded-lg p-8 text-center
              ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
              ${selectedFiles ? 'bg-gray-50' : ''}
            `}
          >
            {selectedFiles ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <FileText className="h-12 w-12 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    已选择 {selectedFiles.length} 个文件
                  </p>
                  <ul className="mt-2 text-sm text-gray-500">
                    {Array.from(selectedFiles).map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setSelectedFiles(null)}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  重新选择
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center">
                  <Upload className="h-12 w-12 text-gray-400" />
                </div>
                <p className="mt-4 text-sm font-medium text-gray-900">
                  将文件拖放到此处，或
                  <label className="mx-1 text-blue-600 hover:text-blue-700 cursor-pointer">
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFileSelect}
                    />
                    浏览文件
                  </label>
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  支持单个或多个文件上传
                </p>
              </>
            )}
          </div>

          {/* Warning Message */}
          <div className="mt-4 flex items-start gap-2 text-sm text-yellow-700 bg-yellow-50 p-3 rounded-lg">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p>
              请确保上传的数据文件格式正确，且不包含敏感信息。
              上传的文件大小不应超过50MB。
            </p>
          </div>
        </div>

        {/* Dialog Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            取消
          </button>
          <button
            onClick={handleUpload}
            disabled={!selectedFiles}
            className={`
              px-6 py-2 text-sm font-medium text-white rounded-lg shadow-sm
              ${selectedFiles
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-300 cursor-not-allowed'}
            `}
          >
            确认上传
          </button>
        </div>
      </div>
    </div>
  );
}