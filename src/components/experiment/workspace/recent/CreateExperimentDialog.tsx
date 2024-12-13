import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Beaker, Target, Clock, Tags, FileText } from 'lucide-react';

interface CreateExperimentDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Duration {
  value: number;
  unit: 'days' | 'weeks' | 'months';
}

export function CreateExperimentDialog({ isOpen, onClose }: CreateExperimentDialogProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    purpose: '',
    description: '',
    duration: {
      value: 1,
      unit: 'weeks' as const
    },
    category: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/experiment/new', { state: formData });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
        {/* Dialog Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h2 className="text-xl font-semibold">创建新实验</h2>
              <p className="mt-1 text-blue-100 text-sm">
                填写基本信息开始您的实验之旅
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Dialog Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Experiment Title */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              实验名称
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Beaker className="h-5 w-5 text-blue-500" />
              </div>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="pl-10 block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="输入一个清晰简洁的实验名称"
              />
            </div>
          </div>

          {/* Experiment Purpose */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              实验目的
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3">
                <Target className="h-5 w-5 text-blue-500" />
              </div>
              <textarea
                required
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                rows={3}
                className="pl-10 block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="详细描述本次实验的研究目的和预期成果"
              />
            </div>
          </div>

          {/* Experiment Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              实验描述
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3">
                <FileText className="h-5 w-5 text-blue-500" />
              </div>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="pl-10 block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="简要描述实验的具体内容和方法"
              />
            </div>
          </div>

          {/* Duration and Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Experiment Duration */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                实验周期
              </label>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-blue-500" />
                  </div>
                  <input
                    type="number"
                    min="1"
                    required
                    value={formData.duration.value}
                    onChange={(e) => setFormData({
                      ...formData,
                      duration: {
                        ...formData.duration,
                        value: parseInt(e.target.value)
                      }
                    })}
                    className="pl-10 block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={formData.duration.unit}
                  onChange={(e) => setFormData({
                    ...formData,
                    duration: {
                      ...formData.duration,
                      unit: e.target.value as Duration['unit']
                    }
                  })}
                  className="rounded-lg border-gray-200 bg-gray-50 focus:bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="days">天</option>
                  <option value="weeks">周</option>
                  <option value="months">月</option>
                </select>
              </div>
            </div>

            {/* Experiment Category */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                实验类别
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Tags className="h-5 w-5 text-blue-500" />
                </div>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="pl-10 block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">选择类别</option>
                  <option value="chemistry">化学实验</option>
                  <option value="physics">物理实验</option>
                  <option value="biology">生物实验</option>
                  <option value="materials">材料实验</option>
                  <option value="other">其他</option>
                </select>
              </div>
            </div>
          </div>

          {/* Dialog Footer */}
          <div className="pt-6 border-t border-gray-200 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              取消
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              立即创建
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}