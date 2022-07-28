import React , { useEffect, useState ,useRef } from "react";
import KuizcardList from "./components/KuizcardList"
import './App.css';
import axios from 'axios'


function App() {
  const [kuizcards , setKuizcards] = useState(SAMPLE_KUIZCARDS)
  
  const categoryEl = useRef()

  useEffect(()=> {
    axios.get('https://opentdb.com/api_category.php')
         .then(response => {
          console.log(response.data)
         })
  })



 useEffect(()=> {
  axios
  .get('https://opentdb.com/api.php?amount=10')
  .then(response => {
    setKuizcards(response.data.results.map((questionItem, index) => {
      const solution =decode(questionItem.correct_answer)
      const choices= [...questionItem.incorrect_answers.map(a=> decode(a)), solution] 
      return {
      id: `${index}-$(Date.now)}`,
      kuiz: decode(questionItem.question),
      solution:solution,
      choices:choices.sort(()=>Math.random() - .5)
    }}))
    console.log(response.data)
  })
 },[])

 function decode(str) {
  const textArea =document.createElement('textarea')
  textArea.innerHTML=str
  return textArea.value
 }

 function handleSubmit(event){
  event.preventDefault()
 }
  return (
    <>
    <form className="heading" onSubmit={ handleSubmit }>
      <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}></select>
      </div>
    <div className="wrapper">
    < KuizcardList kuizcards = { kuizcards }/>
    </div>
    </form>
    </>
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
    id: 2,
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
