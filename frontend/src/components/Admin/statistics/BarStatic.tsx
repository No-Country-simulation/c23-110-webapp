import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  BarElement, 
  CategoryScale, 
  LinearScale,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
  ChartOptions
} from 'chart.js';
import { TrendingUp, Filter } from 'lucide-react';
import { entradas as entradasData } from '../../../mocks/TicketRQ.json';

ChartJS.register(
  BarElement, 
  CategoryScale, 
  LinearScale,
  Title,
  Tooltip,
  Legend
);

type Entrada = {
  nombreJuego: string;
  cantidadCompras: number;
};

const entradas: Entrada[] = entradasData as unknown as Entrada[];

const generateColorGradient = (baseColor: string, count: number): string[] => {
  return Array.from({ length: count }, (_, i) => {
    const intensity = 1 - i * 0.2;
    const rgb = baseColor.match(/\d+/g)?.map(Number) || [0, 0, 0];
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${intensity})`;
  });
};

type BarChartProps = {
  timeRange: string;
};

export default function BarStatic({ timeRange }: BarChartProps) {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string;
      borderWidth: number;
      borderRadius: number;
      hoverBackgroundColor: string;
    }[];
  }>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const gameTickets = entradas.reduce<Record<string, number>>((acc, ticket) => {
      acc[ticket.nombreJuego] = (acc[ticket.nombreJuego] || 0) + ticket.cantidadCompras;
      return acc;
    }, {});

    const labels = Object.keys(gameTickets);
    const data = Object.values(gameTickets);

    const backgroundColors = generateColorGradient('rgb(34, 197, 94)', labels.length);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Entradas Vendidas',
          data,
          backgroundColor: backgroundColors,
          borderColor: 'rgb(34, 197, 94)',
          borderWidth: 1,
          borderRadius: 10,
          hoverBackgroundColor: 'rgba(34, 197, 94, 0.7)',
        },
      ],
    });
  }, [timeRange]);

  const chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Ticket Sales by Game',
        font: { size: 16 },
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        callbacks: {
          label: (context: TooltipItem<'bar'>) => {
            const label = context.label || 'Unknown';
            const value = context.raw || 0;
            return `${label}: ${value} tickets`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Juegos',
        },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Número de Entradas Vendidas',
        },
        grid: { color: 'rgba(0,0,0,0.1)' },
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart',
    },
    layout: {
      padding: { left: 10, right: 10, top: 10, bottom: 10 },
    },
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-green-400 hover:shadow-2xl transition">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <TrendingUp className="w-6 h-6 mr-2 text-green-500" />
          <h2 className="text-xl font-semibold text-gray-700">Desglose de Ventas de Entradas</h2>
        </div>
        <button className="text-gray-500 hover:text-green-500 transition">
          <Filter className="w-5 h-5" />
        </button>
      </div>
      <div className="h-[400px]">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}