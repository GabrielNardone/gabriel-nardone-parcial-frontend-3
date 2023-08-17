import React from 'react'

export const Card = ({props}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <span className='success'>Name: {props.name}</span>
      <span className='success'>DNI: {props.dni}</span>
    </div>
  )
}
