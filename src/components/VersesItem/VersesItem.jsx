import React from 'react'

const VersesItem = ({verse}) => {
  return (
    <div>
      <p>{verse.ayahs.text}</p>
    </div>
  )
}

export default VersesItem