import React , { useEffect, useState } from "react";
import KuizcardList from "./components/KuizcardList"
import './App.css';
import axios from 'axios'


function App() {
  const [kuizcards , setKuizcards] = useState(SAMPLE_KUIZCARDS)

  useEffect(()=>{
     axios
     .get('https://opentdb.com/api_category.php')
     .then(response => {
        console.log(response.data)
     })
  }, [])
  return (
    < KuizcardList kuizcards = { kuizcards }/>
  );
}
const SAMPLE_KUIZCARDS = [
  {
    id: 1,
    kuiz: 'Whats the capital city of Kenya?',
    solution: 'Nairobi',
    choices:
      [
     'Nairobi',
     'Kisumu',
     'Kampala',
     'Kigali'
    ]
  },
  {
    id: 1,
    kuiz: 'Kuiz 2?',
    solution: 'Answer',
    choices:
      [
     'Answer',
     'Answer1',
     'Answer2',
     'Answer3'
    ]
  },
]

export default App;
