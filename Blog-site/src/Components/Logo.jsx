import React from 'react'
import img from '../assets/react.svg'

function Logo({width='10px'}) {
  return (
    <img src={img} alt="logo" width={width} />
  )
}

export default Logo