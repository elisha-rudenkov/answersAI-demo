"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import { useLocation } from 'react-router-dom'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-10">
        {items.map((item) => {
          // Use the isActive property directly from the item
          const isActive = !!item.isActive;
                          
          return (
            <Collapsible key={item.title} asChild defaultOpen={isActive}>
              <SidebarMenuItem className="flex items-center justify-center">
                <SidebarMenuButton 
                  asChild 
                  tooltip={item.title} 
                  isActive={isActive}
                  className={`${isActive ? 
                    "border border-nav-active-border bg-nav-active-bg" : 
                    ""} h-10 md:h-10 md:w-10 lg:h-10 lg:w-10 min-h-[40px] md:min-h-[40px] md:min-w-[40px] lg:min-h-[40px] lg:min-w-[40px] p-0 md:p-0 lg:p-0 md:!w-10 lg:!w-10`}
                >
                  <a 
                    href={item.url} 
                    className="flex h-full w-full items-center justify-start md:justify-center lg:justify-center group"
                    data-active={isActive}
                  >
                    <item.icon />
                    <span className="ml-2 md:hidden lg:hidden">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
