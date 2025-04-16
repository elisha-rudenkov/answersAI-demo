"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { useThemeContext } from "./theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext()
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [canClose, setCanClose] = React.useState(false)
  const [timeRemaining, setTimeRemaining] = React.useState(5)
  
  // Prevent closing the dialog when ESC is pressed or when clicking outside
  const handleOpenChange = (open: boolean) => {
    if (!open && !canClose) {
      // Do nothing - prevent closing
      return
    }
    setDialogOpen(open)
  }
  
  // Start countdown when dialog opens
  React.useEffect(() => {
    if (dialogOpen && !canClose) {
      let countdown = 5;
      setTimeRemaining(countdown);
      
      const timer = setInterval(() => {
        countdown -= 1;
        setTimeRemaining(countdown);
        
        if (countdown <= 0) {
          clearInterval(timer);
          setCanClose(true);
        }
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [dialogOpen]);

  const handleThemeToggle = () => {
    if (theme === "dark") {
      // Reset timer and states when opening dialog
      setCanClose(false);
      setTimeRemaining(5);
      setDialogOpen(true);
    } else {
      // Always allow switching to dark mode
      toggleTheme();
    }
  }

  const handleStayInDarkMode = () => {
    if (canClose) {
      setDialogOpen(false);
    }
  }
  
  return (
    <>
      <DropdownMenuItem onClick={handleThemeToggle}>
        {theme === "light" ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
        {theme === "light" ? "Dark mode" : "Light mode"}
      </DropdownMenuItem>

      {/* We're not using DialogTrigger here because we're controlling the dialog state manually */}
      <Dialog
        open={dialogOpen}
        onOpenChange={handleOpenChange}
      >
        <DialogContent 
          className="sm:max-w-[425px] [&>button]:hidden"
          onInteractOutside={(e) => {
            // Prevent closing when clicking outside
            if (!canClose) {
              e.preventDefault()
            }
          }}
          onEscapeKeyDown={(e) => {
            // Prevent closing when pressing ESC
            if (!canClose) {
              e.preventDefault()
            }
          }}
          // Force the dialog to remain mounted
          forceMount
        >
          <DialogHeader>
            <DialogTitle>My Eyes! 👀</DialogTitle>
            <DialogDescription>
              Light mode? In this economy? We don't do that here.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-center text-lg">🦇 Embrace the darkness! 🦇</p>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Your corneas will thank you later.
            </p>
            {!canClose && (
              <p className="text-center text-xs text-muted-foreground mt-4 animate-pulse">
                Please wait {timeRemaining} seconds while your eyes adjust to the darkness...
              </p>
            )}
          </div>
          <DialogFooter>
            <Button 
              onClick={handleStayInDarkMode}
              disabled={!canClose}
              className="w-full"
            >
              {canClose ? "Fine, I'll stay in dark mode" : `Wait ${timeRemaining}s...`}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
} 