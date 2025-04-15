import { memo } from "react"
import { AppSidebar } from "./app-sidebar"
import { SiteHeader } from "./site-header"
import { SidebarInset, SidebarProvider } from "../ui/sidebar"
import { useLoadingTransition } from "../ui/loading-transition"
import { Loader } from "../ui/loader"
import { Outlet } from "react-router-dom"

interface AppLayoutProps {
  children: React.ReactNode
}

// Memoize sidebar to prevent rerendering during route changes
const MemoizedSidebar = memo(AppSidebar);

// Memoize header to prevent rerendering during route changes
const MemoizedHeader = memo(SiteHeader);

export function AppLayout({ children }: AppLayoutProps) {
  const { isRouteChanging } = useLoadingTransition();
  
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <MemoizedHeader />
        <div className="flex flex-1 relative">
          {/* Loading indicator that appears during route changes */}
          {isRouteChanging && (
            <div className="fixed top-4 right-4 z-50">
              <Loader size="sm" variant="subtle" />
            </div>
          )}
          <MemoizedSidebar />
          <SidebarInset className="w-full">
            {/* CONTENT HERE */}
            {children}
            {/* END OF CONTENT */}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
} 