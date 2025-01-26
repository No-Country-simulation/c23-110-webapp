import { TicketIcon, Calendar } from 'lucide-react';

type StatisticsHeaderProps = {
  timeRange: string;
  onTimeRangeChange: (range: string) => void;
};

export default function HeaderStatic({ 
  timeRange, 
  onTimeRangeChange 
}: StatisticsHeaderProps) {
  return (
    <header className="w-full flex flex-col sm:flex-row justify-between items-center mb-8 bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <TicketIcon className="w-8 h-8 text-orange-500" />
        <h1 className="text-2xl font-bold text-gray-800">Ticket Sales Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <Calendar className="w-5 h-5 text-gray-500" />
        <select 
          value={timeRange}
          onChange={(e) => onTimeRangeChange(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none transition"
        >
          <option value="all">All Time</option>
          <option value="today">Last 24h</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="year">Last Year</option>
        </select>
      </div>
    </header>
  );
}