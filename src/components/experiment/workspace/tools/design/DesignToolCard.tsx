import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DesignTool {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  features: string[];
}

interface DesignToolCardProps {
  tool: DesignTool;
}

const colorMap: Record<string, string> = {
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  green: 'bg-green-500',
  orange: 'bg-orange-500',
  indigo: 'bg-indigo-500',
  rose: 'bg-rose-500'
};

export function DesignToolCard({ tool }: DesignToolCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-lg ${colorMap[tool.color]}`}>
            <tool.icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-medium text-gray-900">{tool.title}</h4>
            <p className="mt-1 text-sm text-gray-500">{tool.description}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {tool.features.map((feature, index) => (
              <span
                key={index}
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${tool.color === 'blue' && 'bg-blue-100 text-blue-800'}
                  ${tool.color === 'purple' && 'bg-purple-100 text-purple-800'}
                  ${tool.color === 'green' && 'bg-green-100 text-green-800'}
                  ${tool.color === 'orange' && 'bg-orange-100 text-orange-800'}
                  ${tool.color === 'indigo' && 'bg-indigo-100 text-indigo-800'}
                  ${tool.color === 'rose' && 'bg-rose-100 text-rose-800'}
                `}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}