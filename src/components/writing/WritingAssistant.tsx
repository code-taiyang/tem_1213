import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TemplateSelection } from './templates/TemplateSelection';
import { RecentWritings } from './recent/RecentWritings';

export function WritingAssistant() {
  const navigate = useNavigate();

  const handleTemplateSelect = (templateId: string) => {
    navigate(`/writing/${templateId}`);
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <RecentWritings />
        <TemplateSelection onSelect={handleTemplateSelect} />
      </div>
    </div>
  );
}