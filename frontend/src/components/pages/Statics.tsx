import { useState } from 'react';
import DoughnutStatic from '../Admin/statistics/DougnhutStatic';
import BarStatic from '../Admin/statistics/BarStatic';
import HeaderStatic from '../Admin/statistics/HeaderStatic';
import { CardStatic } from '../Admin/statistics/CardStatic';
import { Ticket, TrendingUp, GamepadIcon } from 'lucide-react';

export default function Statistics() {
  const [timeRange, setTimeRange] = useState<string>('all');

  return (
    <main className="min-h-screen bg-gray-50 p-6 overflow-auto">
      <HeaderStatic 
        timeRange={timeRange} 
        onTimeRangeChange={setTimeRange} 
      />

      <section 
        aria-labelledby="quick-stats-title" 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        <h2 id="quick-stats-title" className="sr-only">Quick Statistics Overview</h2>
        <CardStatic 
          icon={<Ticket className="text-blue-500" />}
          title="Total Tickets Sold"
          value="2,345"
          percentage={12.5}
          trend="up"
        />
        <CardStatic 
          icon={<TrendingUp className="text-green-500" />}
          title="Revenue"
          value="$45,678"
          percentage={8.2}
          trend="up"
        />
        <CardStatic 
          icon={<GamepadIcon className="text-purple-500" />}
          title="Most Popular Game"
          value="Laser Tag"
          percentage={0}
          trend="neutral"
        />
      </section>

      <section 
        aria-labelledby="detailed-stats-title"
        className="grid grid-cols-1 xl:grid-cols-2 gap-8 overflow-auto"
      >
        <h2 id="detailed-stats-title" className="sr-only">Detailed Sales Statistics</h2>
        <DoughnutStatic timeRange={timeRange} />
        <BarStatic timeRange={timeRange} />
      </section>
    </main>
  );
}