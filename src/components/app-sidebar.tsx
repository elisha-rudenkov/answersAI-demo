import * as React from "react"
import {
  type LucideIcon,
} from "lucide-react"

import HomeIcon from '../assets/home.svg';
import BellIcon from '../assets/bell.svg';
import TimerIcon from '../assets/timer.svg';
import CloudUploadIcon from '../assets/cloud-upload.svg';
import CogIcon from '../assets/cog.svg';

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar"

const createIconComponent = (src: string, alt: string): LucideIcon => {
  const IconComponent = React.forwardRef<SVGSVGElement>((_props, _ref) => (
    <div className="lucide-icon">
      <img src={src} alt={alt} width={24} height={24} />
    </div>
  ));
  
  IconComponent.displayName = alt + "Icon";
  return IconComponent as unknown as LucideIcon;
};

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
  
    {
      title: "Home",
      url: "#",
      icon: createIconComponent(HomeIcon, "Home"),
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: createIconComponent(BellIcon, "Notifications"),
    },
    {
      title: "Logs",
      url: "/logs",
      icon: createIconComponent(TimerIcon, "Logs"),
     
    },
    {
      title: "Cloud Upload",
      url: "/cloud-upload",
      icon: createIconComponent(CloudUploadIcon, "Cloud Upload"),
    },
    {
      title: "Settings",
      url: "/settings",
      icon: createIconComponent(CogIcon, "Settings"),
    },

  ]

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]! md:w-[57px] lg:w-[57px]"
      collapsible="offcanvas"
      {...props}
    >
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
