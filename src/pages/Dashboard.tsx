export default function Page() {
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
          <button className="rounded-md border border-border p-2">
            <span className="text-sm font-medium text-white">Edit Variables</span>
          </button>
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

      {/* Performance Metrics Section */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Graphs Panel */}
        <div className="flex flex-col rounded-xl border border-border p-4 bg-card">
          <h2 className="text-xl font-medium mb-4 text-white">Graphs</h2>
          
          {/* Graph Placeholder */}
          <div className="relative aspect-[16/9] w-full bg-muted/20 rounded-md flex items-center justify-center">
            <p className="text-white">Graph Placeholder</p>
          </div>
        </div>

        {/* KPI Panel */}
        <div className="flex flex-col rounded-xl border border-border p-4 bg-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-white">Key Performance Indicators</h2>
            <button className="rounded-md border border-border p-1 flex items-center text-sm">
              <span className="text-white">Variables</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          {/* KPI Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Infrastructure Units */}
            <div className="rounded-lg border border-border p-4 bg-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-md font-medium text-white">Infrastructure Units</h3>
                <button className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-white opacity-70 mb-2">This describes variable two and what the shown data means.</p>
              <p className="text-3xl font-semibold text-white">€421.07</p>
            </div>

            {/* Charging Growth */}
            <div className="rounded-lg border border-border p-4 bg-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-md font-medium text-white">Charging Growth</h3>
                <button className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-white opacity-70 mb-2">This describes variable two and what the shown data means.</p>
              <p className="text-3xl font-semibold text-white">33.07</p>
            </div>

            {/* Localization change */}
            <div className="rounded-lg border border-border p-4 bg-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-md font-medium text-white">Localization change</h3>
                <button className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-white opacity-70 mb-2">This describes variable two and what the shown data means.</p>
              <p className="text-3xl font-semibold text-white">21.9%</p>
            </div>

            {/* Fleet growth */}
            <div className="rounded-lg border border-border p-4 bg-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-md font-medium text-white">Fleet growth</h3>
                <button className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-white opacity-70 mb-2">This describes variable two and what the shown data means.</p>
              <p className="text-3xl font-semibold text-white">7.03%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
