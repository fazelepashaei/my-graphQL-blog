import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
export default function Loader() {
  return (
    <div>
     
        <RotatingLines
        strokeColor="red"
        strokeWidth="5"
        animationDuration="0.75"
        width="10%"
        visible={true}
        />
    </div>
  )
}
