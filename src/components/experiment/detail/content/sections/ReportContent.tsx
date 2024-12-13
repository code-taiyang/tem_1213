import React from 'react';
import { FileText, Download, Share2 } from 'lucide-react';
import { SelectedResource } from '../../ExperimentDetail';

interface ReportContentProps {
  resource: SelectedResource;
}

export function ReportContent({ resource }: ReportContentProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-100">
            <FileText className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">实验报告</h3>
            <p className="text-sm text-gray-500">最后更新于 2小时前</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
            <Download className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="prose prose-blue max-w-none">
        <h1>实验报告</h1>
        
        <h2>实验目的</h2>
        <p>研究不同温度条件下纳米材料的合成效果，探索最佳合成工艺参数。</p>
        
        <h2>实验方法</h2>
        <p>采用水热法合成纳米材料，控制温度范围在60-180℃，研究温度对产物形貌和性能的影响。</p>
        
        <h3>实验步骤</h3>
        <ol>
          <li>原料配制：按照化学计量比配制前驱体溶液</li>
          <li>水热反应：将溶液转移至反应釜中，设定不同温度进行反应</li>
          <li>产物表征：采用XRD、SEM等手段对产物进行表征</li>
        </ol>
        
        <h2>实验结果</h2>
        <p>通过XRD、SEM等表征手段分析产物的晶体结构和形貌特征，发现温度对产物的晶型和形貌有显著影响。</p>
        
        <h2>结论</h2>
        <p>实验表明温度是影响纳米材料合成的关键因素，最佳合成温度为120℃。在此条件下，产物具有良好的结晶度和均匀的形貌。</p>
      </div>
    </div>
  );
}