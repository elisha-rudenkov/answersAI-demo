"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { useThemeContext } from "./theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <DropdownMenuItem onClick={toggleTheme}>
      {theme === "light" ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
      {theme === "light" ? "Dark mode" : "Light mode"}
    </DropdownMenuItem>
  )
} 