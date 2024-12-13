import React from 'react';
import { FileText, Download, Share2 } from 'lucide-react';

interface ResourcePreviewProps {
  isNewExperiment: boolean;
}

export function ResourcePreview({ isNewExperiment }: ResourcePreviewProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="font-medium text-gray-900">
                {isNewExperiment ? '新建实验' : '实验报告.docx'}
              </h2>
              <p className="text-sm text-gray-500">
                {isNewExperiment ? '请选择实验模板开始' : '最后修改于 2小时前'}
              </p>
            </div>
          </div>
          
          {!isNewExperiment && (
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Download className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Preview Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {isNewExperiment ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">开始新的实验</h3>
              <p className="text-gray-500">
                选择左侧的实验模板，或与AI助手对话来创建新实验
              </p>
            </div>
          ) : (
            <div className="prose prose-blue">
              <h1>实验报告</h1>
              <h2>实验目的</h2>
              <p>研究不同温度条件下纳米材料的合成效果...</p>
              
              <h2>实验方法</h2>
              <p>采用水热法合成纳米材料，控制温度范围在60-180℃...</p>
              
              <h2>实验结果</h2>
              <p>通过XRD、SEM等表征手段分析产物的晶体结构和形貌...</p>
              
              <h2>结论</h2>
              <p>实验表明温度对纳米材料的晶型和形貌有显著影响...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}