import React, { ReactNode } from 'react'
interface Props{
    children: ReactNode
}
export const SwipeIcon = ({children}:Props): JSX.Element=> {
  return (
    <div className="flex items-center">
        <div className="bg-gray-300 h-8 w-8 rounded-full flex justify-center items-center cursor-pointer" >{children}</div>
    </div>
  )
}
