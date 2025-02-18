import type { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

interface InputIconProps extends ComponentProps<'span'> {}

interface InputFieldProps extends ComponentProps<'input'> {}

export const InputRoot = ({error, ...props}: InputRootProps) => {
  return(
    <div
      data-error={error}
      className=" group flex h-12 items-center gap-2 bg-gray-800 border border-gray-600 rounded-xl px-4 focus-within:border-gray-100 data-[error=true]:border-danger"
      {...props}
    />
)}
export const InputIcon = (props:InputIconProps) => {
  return(
    <span 
      className=" text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
)}
export const InputField = (props:InputFieldProps) => {
  return(
  <input
    className=" flex-1 outline-0 placeholder-gray-400"
    {...props}
  />
)}

