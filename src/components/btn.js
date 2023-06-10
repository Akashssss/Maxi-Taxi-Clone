import React from 'react'

export default function Btn({buttonName = "Button"}) {
  return (
      <div className="btn w-full text-center">
         {buttonName.toUpperCase()}
    </div>
  )
}
