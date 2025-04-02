// 导入 clsx 库，用于合并类名
import { type ClassValue, clsx } from "clsx";
// 导入 tailwind-merge 库，用于合并 Tailwind CSS 类名
import { twMerge } from "tailwind-merge";

/**
 * 合并类名的工具函数，使用 clsx 和 tailwind-merge
 * @param inputs - 要合并的类名
 * @returns 合并后的类名
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

