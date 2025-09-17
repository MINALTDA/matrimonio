import React from 'react'

interface SelectProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
  id?: string
  name?: string
  children: React.ReactNode
}

export const Select: React.FC<SelectProps> = ({ 
  value,
  onChange,
  className = '',
  id,
  name,
  children
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {children}
    </select>
  )
}