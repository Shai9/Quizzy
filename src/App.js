import React , { useEffect, useState ,useRef } from "react";
import KuizcardList from "./components/KuizcardList"
import './App.css';
import axios from 'axios'


function App() {
  const [kuizcards , setKuizcards] = useState([])
  const [categories, setCategories] =useState([])
  const categoryEl = useRef()
  const amountEl = useRef()

  useEffect(()=> {
    axios.get('https://opentdb.com/api_category.php')
         .then(response => {
          setCategories(response.data.trivia_categories)
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
         <select id="category" ref={categoryEl}>
            {categories.map(category => {
              return <option value={category.id} key={category.id}>{category.name } </option>
            })}
         </select>
      </div>
      <div className="form-group">
        <label htmlFor="amount">Number of Kuizzes</label>
        <input type= "number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />

      </div>
      <div className="form-group">
        <button className="button">Refresh</button>
      </div>
      </form>
    <div className="wrapper">
    < KuizcardList kuizcards = { kuizcards }/>
    </div>
    </>
  );
}


export default App;
