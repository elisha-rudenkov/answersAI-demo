"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState, useRef, useEffect } from "react"

export function VariablesDrawer() {
  const [selectedVariables, setSelectedVariables] = useState<string[]>(["Carbon 1", "Co2 Distribution"]);
  const [showContextWindow, setShowContextWindow] = useState(false);
  const [contextPosition, setContextPosition] = useState({ x: 0, y: 0 });
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleVariableSelect = (variable: string) => {
    if (selectedVariables.includes(variable)) {
      setSelectedVariables(selectedVariables.filter(v => v !== variable));
    } else {
      // Limit to two selections
      if (selectedVariables.length < 2) {
        setSelectedVariables([...selectedVariables, variable]);
      }
    }
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const variable = (event.currentTarget as HTMLDivElement).getAttribute('data-variable');
    if (variable === "Co2 Distribution") {
      setContextPosition({ 
        x: 0, 
        y: 0 
      });
      
      // Set a timeout for 1.5 seconds
      hoverTimeoutRef.current = setTimeout(() => {
        setShowContextWindow(true);
      }, 1500);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
      setShowContextWindow(false);
    }
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex items-center gap-1 rounded-md border border-border px-2 py-1 text-sm text-white">
          <span>Variables</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-black border-l border-border text-white sm:max-w-xl w-[50vw] p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <SheetTitle className="text-white text-xl font-bold">Edit Variables</SheetTitle>
          <SheetClose className="h-6 w-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </SheetClose>
        </div>

        {/* Search and Action Buttons */}
        <div className="flex gap-2 mb-8">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <Input 
              type="text" 
              defaultValue="421.07"
              className="bg-black border border-border text-white pl-10 h-10 rounded-md"
            />
          </div>
          <Button variant="outline" className="border-border bg-black text-white h-10 px-3 rounded-md">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Autofill
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-black font-medium h-10 rounded-md">
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            </svg>
            Rerun
          </Button>
        </div>

        {/* Variables Content - Main Panel */}
        <div className="space-y-8">
          {/* Category 1 */}
          <div>
            <h3 className="text-white text-md mb-3">Variable category 1</h3>
            <div className="flex flex-wrap gap-2">
              <VariableTag 
                label="Carbon 1" 
                selected={selectedVariables.includes("Carbon 1")}
                onSelect={() => handleVariableSelect("Carbon 1")}
              />
              <VariableTag 
                label="Co2 Distribution" 
                selected={selectedVariables.includes("Co2 Distribution")}
                onSelect={() => handleVariableSelect("Co2 Distribution")}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                dataVariable="Co2 Distribution"
                checkIcon={true}
              />
              <VariableTag 
                label="Fleet sizing" 
                active={true}
                selected={selectedVariables.includes("Fleet sizing")}
                onSelect={() => handleVariableSelect("Fleet sizing")}
                checkIcon={true}
              />
            </div>
          </div>

          {/* Category 2 */}
          <div>
            <h3 className="text-white text-md mb-3">Variable Category 2</h3>
            <div className="flex flex-wrap gap-2">
              <VariableTag 
                label="Parking Rate" 
                selected={selectedVariables.includes("Parking Rate")}
                onSelect={() => handleVariableSelect("Parking Rate")}
              />
              <VariableTag 
                label="Border Rate" 
                selected={selectedVariables.includes("Border Rate")}
                onSelect={() => handleVariableSelect("Border Rate")}
                checkIcon={true}
              />
              <VariableTag 
                label="Request rate" 
                active={true}
                selected={selectedVariables.includes("Request rate")}
                onSelect={() => handleVariableSelect("Request rate")}
                checkIcon={true}
              />
              <VariableTag 
                label="Variable 1" 
                selected={selectedVariables.includes("Variable 1-1")}
                onSelect={() => handleVariableSelect("Variable 1-1")}
              />
              <VariableTag 
                label="Variable 1" 
                selected={selectedVariables.includes("Variable 1-2")}
                onSelect={() => handleVariableSelect("Variable 1-2")}
              />
              <VariableTag 
                label="Variable 1" 
                active={true}
                selected={selectedVariables.includes("Variable 1-3")}
                onSelect={() => handleVariableSelect("Variable 1-3")}
                checkIcon={true}
              />
            </div>
          </div>

          {/* Category 3 */}
          <div>
            <h3 className="text-white text-md mb-3">Variable Category 3</h3>
            <div className="flex flex-wrap gap-2">
              <VariableTag 
                label="Variable 1" 
                selected={selectedVariables.includes("Variable 1-4")}
                onSelect={() => handleVariableSelect("Variable 1-4")}
              />
              <VariableTag 
                label="Variable 1" 
                active={true}
                selected={selectedVariables.includes("Variable 1-5")}
                onSelect={() => handleVariableSelect("Variable 1-5")}
                checkIcon={true}
              />
              <VariableTag 
                label="Variable 1" 
                active={true}
                selected={selectedVariables.includes("Variable 1-6")}
                onSelect={() => handleVariableSelect("Variable 1-6")}
                checkIcon={true}
              />
            </div>
          </div>
        </div>

        {/* Co2 Distribution Context Window - With animation */}
        <div 
          className={`mt-4 border border-border rounded-md bg-black overflow-hidden transition-all duration-500 ease-in-out ${
            showContextWindow 
              ? 'max-h-[200px] opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 translate-y-[-10px] border-opacity-0'
          }`}
        >
          <div className="p-5">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-white flex items-center">
                Co2 Distribution
                <svg className="w-5 h-5 ml-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </h3>
            </div>
            <p className={`text-gray-300 text-sm transition-opacity duration-300 delay-200 ${
              showContextWindow ? 'opacity-100' : 'opacity-0'
            }`}>
              But what truly sets Switch apart is its versatility. It can be used as a scooter, a
              bike, or even a skateboard, making it suitable for people of all ages. Whether
              you're a student, a professional, or a senior citizen, Switch adapts to your
              needs and lifestyle.
            </p>
          </div>
        </div>

        {/* Collapsible Sections */}
        <div className="mt-8 space-y-4">
          <CollapseSection title="Primary Variables" />
          <CollapseSection title="Secondary Variables" />
        </div>

        {/* Selected Variables section at bottom */}
        <div className="mt-8 p-4 border border-border rounded-md">
          <h4 className="text-white text-sm mb-2">Selected Variables:</h4>
          <div className="flex gap-2">
            {selectedVariables.map(variable => (
              <span key={variable} className="text-white bg-[#283618] px-3 py-1 rounded-full text-sm">
                {variable}
              </span>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

type VariableTagProps = {
  label: string;
  active?: boolean;
  selected?: boolean;
  onSelect: () => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: () => void;
  dataVariable?: string;
  checkIcon?: boolean;
};

function VariableTag({ 
  label, 
  active = false, 
  selected = false,
  onSelect,
  onMouseEnter,
  onMouseLeave,
  dataVariable,
  checkIcon = false
}: VariableTagProps) {
  let className = "flex items-center rounded-full py-1 pl-3 pr-2 text-sm cursor-pointer transition-colors";
  
  if (selected) {
    className += " bg-primary/30 border border-primary text-primary";
  } else if (active) {
    className += " bg-primary/10 border border-primary text-primary";
  } else {
    className += " bg-black border border-border/60 text-white hover:bg-black/30";
  }

  return (
    <div 
      className={className}
      onClick={onSelect}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-variable={dataVariable || label}
    >
      <span>{label}</span>
      <div className="ml-1 h-5 w-5 flex items-center justify-center">
        {checkIcon ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        )}
      </div>
    </div>
  )
}

function CollapseSection({ title }: { title: string }) {
  return (
    <div className="border border-border/60 rounded-md bg-black">
      <div className="px-4 py-3 flex justify-between items-center">
        <h3 className={`text-base font-medium ${title.includes('Primary') ? 'text-primary' : 'text-white'}`}>{title}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
} 