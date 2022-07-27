import React, {useState} from 'react'

export default function Kuizcard({kuizcard}) {
  const [flip , setFlip ] = useState(false)
 return (
  <div onClick = {() => setFlip(!flip)}>
    {flip? kuizcard.solution : kuizcard.kuiz }
  </div>
 )
}



