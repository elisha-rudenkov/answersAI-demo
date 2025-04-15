"use client"

import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// A component that applies the native View Transitions API
// to create smoother transitions between routes
export function ViewTransition() {
  const location = useLocation()
  const prevLocationRef = useRef(location.pathname)

  useEffect(() => {
    // Only trigger a view transition if the pathname changes
    if (prevLocationRef.current !== location.pathname) {
      if ('startViewTransition' in document && !document.startViewTransition) {
        // Polyfill or wrapper for the View Transitions API
        // @ts-ignore - startViewTransition is not in the types yet
        document.startViewTransition = (callback: () => void) => {
          callback()
          return {
            ready: Promise.resolve(),
            finished: Promise.resolve()
          }
        }
      }

      // @ts-ignore - This API is new and the types are not yet updated
      if (document.startViewTransition) {
        // @ts-ignore
        document.startViewTransition(() => {
          prevLocationRef.current = location.pathname
        })
      } else {
        prevLocationRef.current = location.pathname
      }
    }
  }, [location])

  return null
} 