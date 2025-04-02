"use client"
// 导入 Moon 和 Sun 图标组件
import { Moon, Sun } from "lucide-react"
// 导入主题钩子
import { useTheme } from "next-themes"

// 导入按钮组件
import { Button } from "@/components/ui/button"
// 导入下拉菜单相关组件
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

/**
 * 主题切换组件，用于在浅色、深色和系统主题之间切换
 * @returns 包含主题切换按钮和下拉菜单的 JSX 元素
 */
export function ModeToggle() {
  // 获取设置主题的函数
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {/* 太阳图标，用于显示浅色主题状态 */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* 月亮图标，用于显示深色主题状态 */}
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {/* 屏幕阅读器文本，用于辅助设备描述按钮功能 */}
          <span className="sr-only">切换主题</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* 下拉菜单项，点击切换到浅色主题 */}
        <DropdownMenuItem onClick={() => setTheme("light")}>浅色</DropdownMenuItem>
        {/* 下拉菜单项，点击切换到深色主题 */}
        <DropdownMenuItem onClick={() => setTheme("dark")}>深色</DropdownMenuItem>
        {/* 下拉菜单项，点击切换到系统主题 */}
        <DropdownMenuItem onClick={() => setTheme("system")}>系统</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

