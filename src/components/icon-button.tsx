import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {}

export const IconButton = ({className, ...props}: IconButtonProps) => {
  return (
    <button
      className={twMerge('bg-gray-500 text-blue p-1.5 rounded-md transition-colors duration-300 hover:bg-blue hover:text-gray-900 cursor-pointer', className)}
      {...props}
    />
  )
}
