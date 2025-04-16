import * as React from "react"
import {
  type LucideIcon,
} from "lucide-react"
import { useLocation, matchPath } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase'

import { NavMain } from "@/components/navigation/nav-main"
import { NavUser } from "@/components/navigation/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar"

// SVG icon components
const HomeIconSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" />
  </svg>
);

const BellIconSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21 19V20H3V19L5 17V11C5 7.9 7.03 5.17 10 4.29C10 4.19 10 4.1 10 4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4C14 4.1 14 4.19 14 4.29C16.97 5.17 19 7.9 19 11V17L21 19ZM14 21C14 21.5304 13.7893 22.0391 13.4142 22.4142C13.0391 22.7893 12.5304 23 12 23C11.4696 23 10.9609 22.7893 10.5858 22.4142C10.2107 22.0391 10 21.5304 10 21" />
  </svg>
);

const TimerIconSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21 11.11V5C21 3.9 20.11 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H11.11C12.37 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.37 21 11.11ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM6 7H18V9H6V7ZM9.08 17H6V15H9.08C9.03 15.33 9 15.66 9 16C9 16.34 9.03 16.67 9.08 17ZM6 13V11H11.11C10.5 11.57 10.04 12.25 9.68 13H6ZM16 21C13.24 21 11 18.76 11 16C11 13.24 13.24 11 16 11C18.76 11 21 13.24 21 16C21 18.76 18.76 21 16 21ZM16.5 16.25L19.36 17.94L18.61 19.16L15 17V12H16.5V16.25Z" />
  </svg>
);

const CloudUploadIconSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11 20H6.5C4.98 20 3.68333 19.4767 2.61 18.43C1.53667 17.3767 1 16.0933 1 14.58C1 13.28 1.39 12.12 2.17 11.1C2.95667 10.08 3.98333 9.43 5.25 9.15C5.67 7.61667 6.50333 6.37667 7.75 5.43C9.00333 4.47667 10.42 4 12 4C13.9533 4 15.6067 4.68 16.96 6.04C18.32 7.39333 19 9.04667 19 11C20.1533 11.1333 21.1067 11.6333 21.86 12.5C22.62 13.3533 23 14.3533 23 15.5C23 16.7533 22.5633 17.8167 21.69 18.69C20.8167 19.5633 19.7533 20 18.5 20H13V12.85L14.6 14.4L16 13L12 9L8 13L9.4 14.4L11 12.85V20Z" />
  </svg>
);

const CogIconSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.0001 15.5C11.0718 15.5 10.1816 15.1313 9.52521 14.4749C8.86883 13.8185 8.50008 12.9283 8.50008 12C8.50008 11.0717 8.86883 10.1815 9.52521 9.52513C10.1816 8.86875 11.0718 8.5 12.0001 8.5C12.9283 8.5 13.8186 8.86875 14.475 9.52513C15.1313 10.1815 15.5001 11.0717 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.475 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5ZM19.4301 12.97C19.4701 12.65 19.5001 12.33 19.5001 12C19.5001 11.67 19.4701 11.34 19.4301 11L21.5401 9.37C21.7301 9.22 21.7801 8.95 21.6601 8.73L19.6601 5.27C19.5401 5.05 19.2701 4.96 19.0501 5.05L16.5601 6.05C16.0401 5.66 15.5001 5.32 14.8701 5.07L14.5001 2.42C14.4601 2.18 14.2501 2 14.0001 2H10.0001C9.75008 2 9.54008 2.18 9.50008 2.42L9.13008 5.07C8.50008 5.32 7.96008 5.66 7.44008 6.05L4.95008 5.05C4.73008 4.96 4.46008 5.05 4.34008 5.27L2.34008 8.73C2.21008 8.95 2.27008 9.22 2.46008 9.37L4.57008 11C4.53008 11.34 4.50008 11.67 4.50008 12C4.50008 12.33 4.53008 12.65 4.57008 12.97L2.46008 14.63C2.27008 14.78 2.21008 15.05 2.34008 15.27L4.34008 18.73C4.46008 18.95 4.73008 19.03 4.95008 18.95L7.44008 17.94C7.96008 18.34 8.50008 18.68 9.13008 18.93L9.50008 21.58C9.54008 21.82 9.75008 22 10.0001 22H14.0001C14.2501 22 14.4601 21.82 14.5001 21.58L14.8701 18.93C15.5001 18.67 16.0401 18.34 16.5601 17.94L19.0501 18.95C19.2701 19.03 19.5401 18.95 19.6601 18.73L21.6601 15.27C21.7801 15.05 21.7301 14.78 21.5401 14.63L19.4301 12.97Z" />
  </svg>
);

// Helper function to create icon components
const createIconComponent = (IconComponent: React.FC<React.SVGProps<SVGSVGElement>>, alt: string, path: string): LucideIcon => {
  const WrappedIcon = React.forwardRef<SVGSVGElement>((_, _ref) => {
    const location = useLocation();
    
    // Check if route is active with proper pattern matching
    const isRouteActive = (path: string): boolean => {
      // Home route special case
      if (path === "/" && (location.pathname === "/" || location.pathname === "")) {
        return true;
      }
      
      // Other routes - using matchPath for more robust path matching
      return !!matchPath(
        { path, end: path === "/" ? true : false },
        location.pathname
      );
    };
    
    const isActive = isRouteActive(path);
    
    return (
      <div className="lucide-icon flex items-center justify-center w-6 h-6">
        <IconComponent 
          aria-label={alt}
          fill="currentColor"
          className={isActive ? "text-[#333333] dark:text-white" : "text-[#666666] dark:text-[#858782]"}
        />
      </div>
    );
  });
  
  WrappedIcon.displayName = alt + "Icon";
  return WrappedIcon as unknown as LucideIcon;
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const [user] = useAuthState(auth);
  
  // Check if route is active with proper pattern matching
  const isRouteActive = (path: string): boolean => {
    // Home route special case
    if (path === "/" && (location.pathname === "/" || location.pathname === "")) {
      return true;
    }
    
    // Other routes - using matchPath for more robust path matching
    return !!matchPath(
      { path, end: path === "/" ? true : false },
      location.pathname
    );
  };
  
  const data = {
    navMain: [
      {
        title: "Home",
        url: "/",
        icon: createIconComponent(HomeIconSvg, "Home", "/"),
        isActive: isRouteActive("/"),
      },
      {
        title: "Notifications",
        url: "/notifications",
        icon: createIconComponent(BellIconSvg, "Notifications", "/notifications"),
        isActive: isRouteActive("/notifications"),
      },
      {
        title: "Logs",
        url: "/logs",
        icon: createIconComponent(TimerIconSvg, "Logs", "/logs"),
        isActive: isRouteActive("/logs"),
      },
      {
        title: "Cloud Upload",
        url: "/cloud-upload",
        icon: createIconComponent(CloudUploadIconSvg, "Cloud Upload", "/cloud-upload"),
        isActive: isRouteActive("/cloud-upload"),
      },
      {
        title: "Settings",
        url: "/settings",
        icon: createIconComponent(CogIconSvg, "Settings", "/settings"),
        isActive: isRouteActive("/settings"),
      },
    ]
  };

  // Prepare user data for NavUser component
  const userData = user ? {
    name: user.displayName || "User",
    email: user.email || "",
    avatar: user.photoURL || "/avatars/default.jpg",
  } : {
    name: "Guest",
    email: "",
    avatar: "/avatars/default.jpg",
  };

  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]! w-[80px] md:w-[80px] lg:w-[80px] bg-sidebar dark:bg-sidebar sidebar"
      variant="sidebar"
      collapsible="offcanvas"
      {...props}
    >
      <SidebarContent className="py-4">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  )
}
