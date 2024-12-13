import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExperimentHeader } from './components/ExperimentHeader';
import { ExperimentActions } from './components/ExperimentActions';
import { ExperimentProgress } from './components/ExperimentProgress';
import { ExperimentDataOverview } from './components/ExperimentDataOverview';
import { ExperimentFooter } from './components/ExperimentFooter';
import { ExperimentWarning } from './components/ExperimentWarning';
import type { ExperimentCardProps } from './types';

export function ExperimentCard({ experiment, onSelect, selected }: ExperimentCardProps) {
  const navigate = useNavigate();
  const [showActions, setShowActions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(experiment.id);
    }
  };

  const handleEnterExperiment = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/experiment/${experiment.id}`);
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

        <ExperimentFooter 
          experiment={experiment}
          onEnter={handleEnterExperiment}
        />

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