import React from 'react';
import { BookOpen, ExternalLink, Download } from 'lucide-react';
import { SelectedResource } from '../../ExperimentDetail';

interface ReferenceContentProps {
  resource: SelectedResource;
}

export function ReferenceContent({ resource }: ReferenceContentProps) {
  const references = [
    {
      id: '1',
      title: '纳米材料的水热合成研究进展',
      authors: '张明, 李华, 王强',
      journal: '材料科学与工程学报',
      year: '2023',
      doi: '10.1234/msej.2023.01.001',
      abstract: '本文综述了近年来纳米材料水热合成方法的研究进展，重点讨论了温度、压力等参数对产物形貌和性能的影响...'
    },
    {
      id: '2',
      title: '温度对纳米材料晶型的影响研究',
      authors: '刘伟, 陈明, 赵红',
      journal: '无机材料学报',
      year: '2023',
      doi: '10.1234/jim.2023.02.005',
      abstract: '通过系统研究不同温度条件下纳米材料的合成过程，探讨了温度对产物晶型和形貌的调控机制...'
    },
    {
      id: '3',
      title: '新型纳米材料的表征方法研究',
      authors: '王刚, 张丽, 李强',
      journal: '分析化学',
      year: '2022',
      doi: '10.1234/ac.2022.12.008',
      abstract: '介绍了多种新型表征手段在纳米材料研究中的应用，包括高分辨电镜、X射线衍射等技术的优化方案...'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-100">
            <BookOpen className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">参考文献</h3>
            <p className="text-sm text-gray-500">实验相关的研究文献</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {references.map((ref) => (
          <div key={ref.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between">
              <h4 className="text-lg font-medium text-gray-900">{ref.title}</h4>
              <div className="flex gap-2">
                <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
                  <ExternalLink className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <p className="mt-2 text-sm text-gray-600">
              {ref.authors} · {ref.journal} · {ref.year}
            </p>
            
            <p className="mt-2 text-sm text-blue-600">DOI: {ref.doi}</p>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h5 className="text-sm font-medium text-gray-900 mb-2">摘要</h5>
              <p className="text-sm text-gray-600">{ref.abstract}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}