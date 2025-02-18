import type { ComponentProps } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {}

export const IconButton = (props: IconButtonProps) => {
  return (
    <button
      className=" bg-gray-500 text-blue p-1.5 rounded-md transition-colors duration-300 hover:bg-blue hover:text-gray-900 cursor-pointer"
      {...props}
    />
  )
}
