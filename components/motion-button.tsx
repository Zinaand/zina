import { motion, HTMLMotionProps, AnimationDefinition, PanInfo } from 'framer-motion'
import React from 'react'

// 定义所有需要特殊处理的冲突事件类型
type MotionEventHandlers = {
  onDrag?: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void
  onDragStart?: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void
  onDragEnd?: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void
  onAnimationStart?: (definition: AnimationDefinition) => void
  onAnimationComplete?: (definition: AnimationDefinition) => void
  // 添加其他需要处理的 motion 事件...
}

// 创建合并类型
type MotionButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionEventHandlers> & 
  Omit<HTMLMotionProps<'button'>, keyof React.ButtonHTMLAttributes<HTMLButtonElement> | 'ref'> &
  MotionEventHandlers

export const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.button ref={ref} {...props}>
        {children}
      </motion.button>
    )
  }
)

MotionButton.displayName = 'MotionButton'