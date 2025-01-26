import { useEffect, useMemo, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { BarChart3, Filter } from 'lucide-react';
import { entradas } from '../../../mocks/TicketRQ.json';

ChartJS.register(ArcElement, Tooltip, Legend);

const COLOR_PALETTE = [
  '#00BFFF', '#FFEB3B', '#8BC34A', 
  '#757575', '#9C27B0', '#FF5722'
];

type TicketType = {
  dt: number[];
  labels: string[];
};

type DoughnutChartProps = {
  timeRange: string;
};

export default function DoughnutStatic({ timeRange }: DoughnutChartProps) {
  const [ticket, setTicket] = useState<TicketType>({
    dt: [],
    labels: [],
  });

  const [filteredData, setFilteredData] = useState<TicketType>({
    dt: [],
    labels: [],
  });

  useEffect(() => {
    const processTicketData = () => {
      const updatedData: TicketType = { dt: [], labels: [] };
  
      entradas.forEach((tk) => {
        const findGame = updatedData.labels.indexOf(tk.nombreJuego);
        if (findGame > -1) {
          updatedData.dt[findGame] += tk.cantidadCompras;
        } else {
          updatedData.labels.push(tk.nombreJuego);
          updatedData.dt.push(tk.cantidadCompras);
        }
      });
  
      setTicket(updatedData);
      setFilteredData(updatedData);
    };

    processTicketData();
  }, [timeRange]);

  const doughnutConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#333',
        titleColor: 'white',
        bodyColor: 'white',
      },
    },
  };

  const doughnutData = useMemo(() => ({
    labels: filteredData.labels,
    datasets: [{
      label: 'Tickets Sold',
      data: filteredData.dt,
      backgroundColor: COLOR_PALETTE.slice(0, filteredData.labels.length),
      hoverOffset: 4,
    }]
  }), [filteredData]);

  return (
    <section className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-orange-400 hover:shadow-2xl transition">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <BarChart3 className="w-6 h-6 mr-2 text-orange-500" />
          <h2 className="text-xl font-semibold text-gray-700">Ticket Distribution</h2>
        </div>
        <button className="text-gray-500 hover:text-orange-500 transition">
          <Filter className="w-5 h-5" />
        </button>
      </div>
      <div className="h-[300px]">
        <Doughnut data={doughnutData} options={doughnutConfig} />
      </div>
    </section>
  );
}