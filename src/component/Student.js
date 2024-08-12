import React from 'react';
import "./Student.css"
import studentImg from "./images/student.jpg"

const Student = () => {
  
  const students = [
    { id: 1, name: 'John Doe', number: '9865413112', age: '28', mail: 'johndoe@gmail.com', course:'Web Developer',duration:'6 Months',slot:'10A.M-1P.M' },
    { id: 2, name: 'sween', number: '8511621162', age: '21', mail: 'sween@gmail.com', course:'Mern Stack Developer',duration:'6 Months',slot:'10A.M-1P.M' },
    { id: 3, name: 'ryan', number: '7845541515', age: '23', mail: 'ryan@gmail.com', course:'Full Stack Developer',duration:'6 Months',slot:'10A.M-1P.M' },
    { id: 4, name: 'rufina', number: '9515156581', age: '21', mail: 'rufina@gmail.com', course:'Python',duration:'2 Months',slot:'11A.M-1P.M' },
    { id: 5, name: 'aliya', number: '7956231313', age: '23', mail: 'aliya@gmail.com', course:'SAP',duration:'2 Months',slot:'11A.M-1P.M' },
    { id: 6, name: 'matteo', number: '8566564632', age: '21', mail: 'matteo@gmail.com', course:'Javascript',duration:'2 Months',slot:'11A.M-1P.M' },

];


  return (
    <div className='student' >
        <div className='studentContainer'>
        <div className='left'>
            <img src={studentImg} alt="student -img"></img>
            </div>
        <div className='right'>
        <table className='table'>
           
      <thead>         
        <tr>
          <th>S.No.</th>
          <th>Student Name</th>
          <th>Mobile Number</th>
          <th>Age</th>
          <th>E-Mail ID</th>
          <th>Course</th>
          <th>Duration</th>
          <th>Time Slot</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.number}</td>
            <td>{student.age}</td>
            <td>{student.mail}</td>
            <td>{student.course}</td>
            <td>{student.duration}</td>
            <td>{student.slot}</td>
          </tr>
          
        ))}
      </tbody> 
    </table>
      </div>
    </div>
    </div>
  );
};

export default Student;