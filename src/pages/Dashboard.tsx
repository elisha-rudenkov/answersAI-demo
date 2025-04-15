/* import React from 'react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import MainContent from '../components/MainContent';
import { colors } from '@/lib/colors';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard" style={{ backgroundColor: colors.secondaryBg }}>
      <Sidebar />
      <div className="main-container" style={{ backgroundColor: colors.secondaryBg }}>
        <TopNav />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;  */


import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Page() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
              </div>
              <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
