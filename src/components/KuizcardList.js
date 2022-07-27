import React from 'react'
import Kuizcard from './Kuizcard';

export default function KuizcardList({ kuizcards }) {
  return (
   <div className='card-grid'>
    {kuizcards.map(kuizcard => {
      return <Kuizcard kuizcard ={kuizcard} key= {kuizcard.id} />
    })}
   </div>
  )
}
