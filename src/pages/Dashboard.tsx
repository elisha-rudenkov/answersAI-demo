"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { VariablesDrawer } from "@/components/VariablesDrawer"

export default function Page() {
  // Mock data for the chart
  const chartData = [
    { month: "Apr", value: 35000 },
    { month: "May", value: 50000 },
    { month: "Jun", value: 40000 },
    { month: "Jul", value: 95000 },
    { month: "Aug", value: 60000 },
    { month: "Sep", value: 55000 },
    { month: "Oct", value: 60000 },
  ]

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 bg-background text-white">
      {/* Header with title and actions */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h1 className="text-2xl font-bold text-white">Charging Station</h1>
        </div>
        <div className="flex space-x-2">
          <button className="rounded-md border border-border p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <VariablesDrawer />
        </div>
      </div>

      {/* Best Scenario Results Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#C9FF3B">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg font-medium" style={{ color: "#C9FF3B" }}>Best Scenario Results</span>
          </div>
          <button className="rounded-full p-1 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Results Cards */}
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-xl p-4" style={{ backgroundColor: "rgba(201, 255, 59, 0.02)", border: "1px solid #C9FF3B" }}>
            <p className="text-sm" style={{ color: "#C9FF3B" }}>The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.</p>
            <button style={{ color: "#C9FF3B" }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between rounded-xl p-4" style={{ backgroundColor: "rgba(201, 255, 59, 0.02)", border: "1px solid #C9FF3B" }}>
            <p className="text-sm" style={{ color: "#C9FF3B" }}>The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.</p>
            <button style={{ color: "#C9FF3B" }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Two-column layout for Graphs and KPIs */}
      <div className="mt-6">
        {/* First Row - Headers with Controls */}
        <div className="flex flex-col md:flex-row mb-4">
          <div className="w-full md:w-1/2 flex items-center justify-between pr-4">
            <h2 className="text-xl font-medium text-white">Graphs</h2>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-between mt-4 md:mt-0">
            <h2 className="text-xl font-medium text-white">Key Performance Indicators</h2>
            <VariablesDrawer />
          </div>
        </div>

        {/* Second Row - Content */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Graphs Section - Left Column */}
          <div className="w-full md:w-1/2">
            <div className="rounded-xl border border-border bg-black/20 p-4 relative">
              {/* Dropdown positioned at top right of chart */}
              <div className="absolute top-4 right-4 z-10">
                <button className="flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm text-white">
                  <span>Unsatisfied Demand %</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
              </div>
              
              {/* Chart */}
              <div className="mt-12">
                <ResponsiveContainer width="100%" height={260}>
                  <AreaChart
                    data={chartData}
                    margin={{
                      top: 5,
                      right: 10,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C9FF3B" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#C9FF3B" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid horizontal={true} vertical={false} stroke="rgba(255,255,255,0.1)" />
                    <XAxis 
                      dataKey="month" 
                      stroke="#666" 
                      axisLine={false}
                      style={{fontSize: '12px'}}
                      tick={{fill: '#999'}}
                      tickLine={false}
                      dy={10}
                    />
                    <YAxis 
                      stroke="#666" 
                      axisLine={false}
                      style={{fontSize: '12px'}}
                      tick={{fill: '#999'}}
                      tickFormatter={(value: number) => `$${value/1000}k`}
                      tickCount={5}
                      domain={['dataMin - 5000', 'dataMax + 10000']}
                      tickLine={false}
                    />
                    <Tooltip 
                      cursor={{stroke: '#C9FF3B', strokeWidth: 1, strokeDasharray: '5 5'}}
                      contentStyle={{backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '4px'}}
                      labelStyle={{color: '#ccc'}}
                      itemStyle={{color: '#C9FF3B'}}
                      formatter={(value: number) => [`$${value}`, 'Value']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#C9FF3B" 
                      fillOpacity={1}
                      fill="url(#colorValue)" 
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#C9FF3B", stroke: "#C9FF3B", strokeWidth: 2 }}
                      activeDot={{ r: 6, fill: "#C9FF3B", stroke: "#fff", strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* KPI Section - Right Column */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Infrastructure Units */}
              <div className="rounded-lg border border-border/40 p-4 bg-black/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-md font-medium text-white">Infrastructure Units</h3>
                  <button className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-gray-400 mb-2">This describes variable two and what the shown data means.</p>
                <p className="text-3xl font-semibold text-white">€421.07</p>
              </div>

              {/* Charging Growth */}
              <div className="rounded-lg border border-border/40 p-4 bg-black/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-md font-medium text-white">Charging Growth</h3>
                  <button className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-gray-400 mb-2">This describes variable two and what the shown data means.</p>
                <p className="text-3xl font-semibold text-white">33.07</p>
              </div>

              {/* Localization change */}
              <div className="rounded-lg border border-border/40 p-4 bg-black/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-md font-medium text-white">Localization change</h3>
                  <button className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-gray-400 mb-2">This describes variable two and what the shown data means.</p>
                <p className="text-3xl font-semibold text-white">21.9%</p>
              </div>

              {/* Fleet growth */}
              <div className="rounded-lg border border-border/40 p-4 bg-black/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-md font-medium text-white">Fleet growth</h3>
                  <button className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-gray-400 mb-2">This describes variable two and what the shown data means.</p>
                <p className="text-3xl font-semibold text-white">7.03%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
