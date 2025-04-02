"use client";
// 导入 React 库
import * as React from "react";
// 导入 Next.js 主题提供者组件
import { ThemeProvider as NextThemesProvider } from "next-themes";
// 导入 Next.js 主题提供者的属性类型
import { type ThemeProviderProps } from "next-themes";

/**
 * 自定义主题提供者组件，包裹 Next.js 主题提供者
 * @param children - 子组件，将应用主题设置
 * @param props - 传递给 Next.js 主题提供者的属性
 * @returns 包含 Next.js 主题提供者的 JSX 元素
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}