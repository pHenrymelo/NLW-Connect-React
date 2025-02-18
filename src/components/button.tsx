import type { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'> {}

export const Button = (props: ButtonProps) => {
    return( 
    <button 
    className=" flex font-semibold justify-between items-center bg-gray-500 text-blue w-full h-12 px-5 rounded-xl transition-colors duration-300 hover:bg-blue hover:text-gray-900 cursor-pointer"
    {...props}
    />
)}