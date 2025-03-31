"use client"

import { toast } from "sonner"

type ToastType = "success" | "error" | "info" | "warning"

export function useToast() {
  const showToast = (message: string, type: ToastType = "info", duration = 5000) => {
    switch (type) {
      case "success":
        toast.success(message, { duration })
        break
      case "error":
        toast.error(message, { duration })
        break
      case "warning":
        toast.warning(message, { duration })
        break
      case "info":
      default:
        toast.info(message, { duration })
        break
    }
  }

  return { toast: showToast }
}

