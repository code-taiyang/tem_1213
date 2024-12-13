import React, { useState } from 'react';
import { ExperimentHeader } from './card/ExperimentHeader';
import { ExperimentActions } from './card/ExperimentActions';
import { ExperimentProgress } from './card/ExperimentProgress';
import { ExperimentDataOverview } from './card/ExperimentDataOverview';
import { ExperimentFooter } from './card/ExperimentFooter';
import { ExperimentWarning } from './card/ExperimentWarning';
import type { ExperimentCardProps } from '../types';

export function ExperimentCard({ experiment, onSelect, selected }: ExperimentCardProps) {
  const [showActions, setShowActions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(experiment.id);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    // 实现分享逻辑
  };

  const handleUpload = (e: React.MouseEvent) => {
    e.stopPropagation();
    // 实现上传逻辑
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    // 实现删除逻辑
  };

  return (
    <div 
      className={`
        relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 
        ${selected ? 'ring-2 ring-blue-500' : ''}
      `}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => {
        setShowActions(false);
        setShowMenu(false);
      }}
      onClick={handleCardClick}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <ExperimentHeader experiment={experiment} />
          {showActions && (
            <ExperimentActions
              onUpload={handleUpload}
              onShare={handleShare}
              onDelete={handleDelete}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          )}
        </div>

        <ExperimentProgress experiment={experiment} />

        {experiment.recentData && (
          <ExperimentDataOverview recentData={experiment.recentData} />
        )}

        <ExperimentFooter experiment={experiment} />

        {experiment.hasWarning && experiment.warningMessage && (
          <ExperimentWarning message={experiment.warningMessage} />
        )}
      </div>

      {selected && (
        <div className="absolute inset-0 ring-2 ring-blue-500 rounded-lg pointer-events-none" />
      )}
    </div>
  );
}