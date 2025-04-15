import { AppSidebar } from "./app-sidebar"
import { SiteHeader } from "./site-header"
import { SidebarInset, SidebarProvider } from "./ui/sidebar"

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1 relative">
          <AppSidebar />
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