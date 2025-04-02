"use client"

import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// Navbar container
export const Navbar = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={cn(/* 类名不变 */)}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      {...props as any} // 临时解决方案：使用类型断言
    >
      {children}
    </motion.nav>
  )
}

// Desktop navigation body
export const NavBody = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("mx-auto hidden h-16 max-w-screen-xl items-center justify-between px-4 md:flex lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  )
}

// Navigation items container
export const NavItems = ({
  items,
  className,
  ...props
}: {
  items: { name: string; link: string }[]
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex items-center gap-6", className)} {...props}>
      {items.map((item, idx) => (
        <Link
          key={`desktop-link-${idx}`}
          href={item.link}
          className="group relative text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50"
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  )
}

// Mobile navigation container
export const MobileNav = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("md:hidden", className)} {...props}>
      {children}
    </div>
  )
}

// Logo component
export const NavbarLogo = ({
  className,
  logoLetter = "A",
  brandName = "Acme",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  logoLetter?: string
  brandName?: string
}) => {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <Link href="/" className="flex items-center gap-2 group">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white transition-transform duration-300 group-hover:scale-110 dark:bg-white dark:text-neutral-900">
          <motion.span className="font-bold" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            {logoLetter}
          </motion.span>
        </div>
        <motion.span
          className="text-lg font-semibold text-neutral-900 dark:text-white"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {brandName}
        </motion.span>
      </Link>
    </div>
  )
}

// Button component
export const NavbarButton = ({
    variant = "primary",
    className,
    children,
    ...props
  }: {
    variant?: "primary" | "secondary"
  } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <motion.button
        className={cn(/* 类名不变 */)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props as any} // 临时解决方案
      >
        {children}
      </motion.button>
    )
  }

// Mobile navigation header
export const MobileNavHeader = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex h-16 items-center justify-between px-4", className)} {...props}>
      {children}
    </div>
  )
}

// Mobile navigation toggle button
export const MobileNavToggle = ({
  isOpen,
  onClick,
  className,
  ...props
}: {
  isOpen: boolean
  onClick: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        className,
      )}
      whileTap={{ scale: 0.9 }}
      {...props}
      {...props as any}
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </motion.button>
  )
}
// Mobile navigation menu
export const MobileNavMenu = ({
    isOpen,
    onClose,
    children,
    className,
    ...props
  }: {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
  } & React.HTMLAttributes<HTMLDivElement>) => {
    return (
      <motion.div
        className={cn(/* 类名不变 */)}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        {...props as any} // 临时解决方案
      >
        {children}
      </motion.div>
    )
  }

