import React, { useState } from 'react'

export default function Kuizcard({kuizcard}) {
  const [flip, setFlip] = useState(false)
  


  return (
    <div className={`card ${flip ? 'flip': ''}`}
     onClick={()=> setFlip(!flip)}>
      <div className='front'>
         {kuizcard.kuiz}
         <div className='kuizcard-choices'>
          {kuizcard.choices.map(choice =>{
            return <div className='kuizcard-choice'>{choice}</div>
          })}
         </div>
      </div>
      <div className='back'>
        {kuizcard.solution}
        </div>
      </div>
  )
}




