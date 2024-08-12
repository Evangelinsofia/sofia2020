import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";  


function Header() { 

  const [showsearchInput, setShowsearchInput] = useState(false)
  const [inputValue, setInputValue] = useState("") 

  let  session = localStorage.getItem("session")
  let navigate = useNavigate()
  // console.log(showsearchInput)
 console.log(session)

  function handlonMouseOver(){ 
      setShowsearchInput(true)
  }

  function handlonMouseOut(){
    setInputValue("")
    setShowsearchInput(false)
  }


  function handleChange(e){
         console.log(e.target.value)
         setInputValue(e.target.value)
  }

  function handleLogout(e){
    e.preventDefault();

    localStorage.removeItem("session")
    navigate("/")
  }


  

  return (
    <div className="header">
      <h2 className="logo"><Link to={"/"}>QRS</Link></h2>
      <div className="headerRight"  >
      <div className="formDiv"> 
        <form onMouseEnter={() => handlonMouseOver()} onMouseLeave={handlonMouseOut} >
          <input type="text" className={(showsearchInput) ? "showInput" : "closeInput" } placeholder="Search..."
           onChange={(e) => {handleChange(e)}} value={inputValue}/>
        </form>
        </div>
        <ul className="headerUl">
                <li>
                    <Link to='/course' > Course  </Link>
                </li>
                <li>
                    <Link to='/student' > Student  </Link>
                </li>
                {(!session)&&                     
                 <li>
                    <Link to='/register' > Register  </Link>
               </li>}
               <li>
                   {(session) ? <button id="logout" onClick={handleLogout}>Logout </button>: <Link to='/login' > Login  </Link> }
                </li>

        </ul>
      </div>
    </div>
  );
}



export default Header