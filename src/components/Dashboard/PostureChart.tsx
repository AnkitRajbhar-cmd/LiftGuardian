import React, { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Legend, BarChart, Bar, LineChart, Line
} from 'recharts';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { usePosture } from '../../../context/PostureContext';
import { ChartData, TimeRange, ChartType } from '../../../types/index';

const PostureChart: React.FC = () => {
  const { data } = usePosture();
  const [chartType, setChartType] = useState<ChartType>('area');
  const [timeRange, setTimeRange] = useState<TimeRange>('week');
  
  // Process data for charts
  const processDataForChart = (): ChartData[] => {
    // Group data by hour/day based on time range
    const now = new Date();
    let startDate: Date;
    
    if (timeRange === 'day') {
      startDate = new Date(now);
      startDate.setHours(now.getHours() - 24);
    } else if (timeRange === 'week') {
      startDate = new Date(now);
      startDate.setDate(now.getDate() - 7);
    } else {
      startDate = new Date(now);
      startDate.setMonth(now.getMonth() - 1);
    }
    
    const filtered = data.filter(item => new Date(item.timestamp) >= startDate);
    
    // Group by time period
    const groupedData: Record<string, { Good: number; Bad: number; Risky: number }> = {};
    
    filtered.forEach(item => {
      const date = new Date(item.timestamp);
      let key: string;
      
      if (timeRange === 'day') {
        key = `${date.getHours()}:00`;
      } else if (timeRange === 'week') {
        key = date.toLocaleDateString('en-US', { weekday: 'short' });
      } else {
        key = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      }
      
      if (!groupedData[key]) {
        groupedData[key] = { Good: 0, Bad: 0, Risky: 0 };
      }
      
      groupedData[key][item.postureType]++;
    });
    
    // Convert to array for chart
    return Object.entries(groupedData).map(([time, counts]) => ({
      time,
      ...counts
    }));
  };
  
  const chartData = processDataForChart();
  
  const renderChart = () => {
    switch (chartType) {
      case 'area':
        return (
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="time" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '0.375rem',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }} 
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="Good" 
              stackId="1" 
              stroke="#10B981" 
              fill="#10B981" 
              fillOpacity={0.6}
              activeDot={{ r: 6 }}
            />
            <Area 
              type="monotone" 
              dataKey="Bad" 
              stackId="1" 
              stroke="#EF4444" 
              fill="#EF4444" 
              fillOpacity={0.6}
              activeDot={{ r: 6 }}
            />
            <Area 
              type="monotone" 
              dataKey="Risky" 
              stackId="1" 
              stroke="#F59E0B" 
              fill="#F59E0B" 
              fillOpacity={0.6}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        );
      case 'bar':
        return (
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="time" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '0.375rem',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }} 
            />
            <Legend />
            <Bar dataKey="Good" fill="#10B981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Bad" fill="#EF4444" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Risky" fill="#F59E0B" radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      default:
        return (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="time" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '0.375rem',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }} 
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="Good" 
              stroke="#10B981" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }} 
            />
            <Line 
              type="monotone" 
              dataKey="Bad" 
              stroke="#EF4444" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }} 
            />
            <Line 
              type="monotone" 
              dataKey="Risky" 
              stroke="#F59E0B" 
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        );
    }
  };
  
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
        <h2 className="text-xl font-semibold text-gray-800">Posture Trends</h2>
        
        <div className="flex flex-wrap gap-4">
          <div>
            <select 
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as TimeRange)}
            >
              <option value="day">Last 24 Hours</option>
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
            </select>
          </div>
          
          <div>
            <select 
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm"
              value={chartType}
              onChange={(e) => setChartType(e.target.value as ChartType)}
            >
              <option value="area">Area Chart</option>
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-green-50 p-3 rounded-lg">
          <span className="text-xs text-gray-500 uppercase">Good Posture</span>
          <div className="text-lg font-bold text-green-600 flex items-center justify-center">
            <CheckCircle className="h-4 w-4 mr-1" /> Healthy
          </div>
        </div>
        <div className="bg-red-50 p-3 rounded-lg">
          <span className="text-xs text-gray-500 uppercase">Bad Posture</span>
          <div className="text-lg font-bold text-red-600 flex items-center justify-center">
            <XCircle className="h-4 w-4 mr-1" /> Needs Attention
          </div>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg">
          <span className="text-xs text-gray-500 uppercase">Risky Posture</span>
          <div className="text-lg font-bold text-yellow-600 flex items-center justify-center">
            <AlertTriangle className="h-4 w-4 mr-1" /> Warning
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostureChart;