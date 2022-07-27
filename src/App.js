import React , { useState } from "react";
import KuizcardList from "./components/KuizcardList"
import './App.css';

function App() {
  const [kuizcards , setKuizcards] = useState(SAMPLE_KUIZCARDS)
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
