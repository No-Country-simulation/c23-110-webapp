import { ReactNode } from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

type StatsCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  percentage: number;
  trend: 'up' | 'down' | 'neutral';
};

export function CardStatic({ 
  icon, 
  title, 
  value, 
  percentage, 
  trend 
}: StatsCardProps) {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="text-green-500 w-4 h-4" />;
      case 'down':
        return <ArrowDown className="text-red-500 w-4 h-4" />;
      default:
        return <Minus className="text-gray-500 w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <div className="bg-gray-100 p-3 rounded-full">{icon}</div>
        <div className="flex items-center space-x-1">
          {getTrendIcon()}
          {percentage > 0 && (
            <span className={`text-sm ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {percentage}%
            </span>
          )}
        </div>
      </div>
      <h3 className="text-gray-500 mb-2">{title}</h3>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}