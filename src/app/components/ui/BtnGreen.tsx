import React from 'react'

type BtnGreenProps = {
    label: string;
    onClick?: () => void;
    
}

const BtnGreen = ({label, onClick}: BtnGreenProps) => {
  return (
    <button 
    onClick={onClick}
    className="w-50 hover:cursor-pointer bg-emerald-400 hover:bg-emerald-500 hover:scale-105 p-4 uppercase rounded-2xl transition-all duration-150 ease-in-out">
        {label}
    </button>
  )
}

export default BtnGreen
