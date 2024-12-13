import React, { useState } from 'react';
import { Send, Upload, X } from 'lucide-react';

interface AIInputProps {
  onSend: (content: string) => void;
  onUpload: () => void;
  uploadedFiles?: Array<{
    name: string;
    size: number;
    type: string;
    lastModified: number;
  }>;
}

export function AIInput({ onSend, onUpload, uploadedFiles }: AIInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className="space-y-3">
      {/* Uploaded Files Status */}
      {uploadedFiles && uploadedFiles.length > 0 && (
        <div className="px-3 py-2 bg-blue-50 rounded-lg">
          <div className="text-sm text-blue-700 font-medium mb-2">
            已上传的文件：
          </div>
          <div className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <div 
                key={index}
                className="flex items-center justify-between text-sm text-blue-600 bg-white px-3 py-1.5 rounded"
              >
                <span className="truncate flex-1">{file.name}</span>
                <button className="ml-2 text-blue-400 hover:text-blue-600">
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="输入问题或指令..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="button"
          onClick={onUpload}
          className="p-2 text-gray-400 hover:text-gray-600 group relative"
          title="上传最新数据"
        >
          <Upload className="h-5 w-5" />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            上传最新数据
          </span>
        </button>
        <button
          type="submit"
          className="p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}