import { useLocation } from "react-router-dom"

import { SearchForm } from "@/components/navigation/search-form"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()
  const location = useLocation()
  const isRootRoute = location.pathname === "/" || location.pathname === ""

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center header">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 17H21C21.5523 17 22 17.4477 22 18C22 18.5128 21.614 18.9355 21.1166 18.9933L21 19H3C2.44772 19 2 18.5523 2 18C2 17.4872 2.38604 17.0645 2.88338 17.0067L3 17ZM2.99988 11L20.9999 10.9978C21.5522 10.9978 22 11.4454 22 11.9977C22 12.5105 21.6141 12.9333 21.1167 12.9911L21.0001 12.9978L3.00012 13C2.44784 13.0001 2 12.5524 2 12.0001C2 11.4873 2.38594 11.0646 2.88326 11.0067L2.99988 11ZM3 5H21C21.5523 5 22 5.44772 22 6C22 6.51284 21.614 6.93551 21.1166 6.99327L21 7H3C2.44772 7 2 6.55228 2 6C2 5.48716 2.38604 5.06449 2.88338 5.00673L3 5Z" />
          </svg>
        </Button>
        
        {isRootRoute && (
          <div className="flex items-center gap-[21px] ml-2">
            <Button 
              variant="ghost" 
              className="nav-button py-2 px-4 text-sm rounded-sm"
            >
              Charging Stations
            </Button>
            <Button 
              variant="ghost" 
              className="nav-button py-2 px-4 text-sm rounded-sm"
            >
              Fleet Sizing
            </Button>
            <Button 
              variant="ghost" 
              className="nav-button py-2 px-4 text-sm rounded-sm"
            >
              Parking
            </Button>
          </div>
        )}
       
        <SearchForm className="w-full sm:ml-auto sm:w-auto" />
      </div>
    </header>
  )
}
