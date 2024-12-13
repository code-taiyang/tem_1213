import React from 'react';
import type { ExperimentData } from '../types';

interface ExperimentDataOverviewProps {
  recentData: NonNullable<ExperimentData['recentData']>;
}

export function ExperimentDataOverview({ recentData }: ExperimentDataOverviewProps) {
  return (
    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-gray-500">数据点数</p>
          <p className="text-sm font-medium text-gray-900">{recentData.dataPoints}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">数据完整度</p>
          <p className="text-sm font-medium text-gray-900">{recentData.completeness}%</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">最新数值</p>
          <p className="text-sm font-medium text-gray-900">
            {recentData.lastValue} {recentData.unit}
          </p>
        </div>
      </div>
    </div>
  );
}