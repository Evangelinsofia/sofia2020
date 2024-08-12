import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import "./Course.css"

function Course() {
  const[course,setcourse] = useState('')


  function handlesubmit(e){
    e.preventDefault()
    console.log(course)
    axios.post("http://localhost:8000/course",{course})
    .then((result) => {console.log(result.data)})
    setcourse('')
  }
  return (
    <div className='courseCnt'>
      <div className='inside'> 
      <form onsubmit = {handlesubmit}  >

      <table>
        <tr>
            <th>Coursee</th>
            <th>Fees</th>
            <th>Duration</th>
        </tr>
        <tr>
            <td>web development</td>
            <td>50000</td>
            <td>6 Months</td>
        </tr>
        <tr>
            <td>javascript</td>
            <td>20000</td>
            <td>2 Months</td>
        </tr>
        <tr>
            <td>mern stack development</td>
            <td>50000</td>
            <td>6 Months</td>
        </tr>

        <tr>
            <td>Python</td>
            <td>20000</td>
            <td>2 Months</td>
        </tr>

        <tr>
            <td>SAP</td>
            <td>15000</td>
            <td>2 Months</td>
        </tr>
    </table>    
        
  </form>
</div>
</div>
  )
}

export default Course