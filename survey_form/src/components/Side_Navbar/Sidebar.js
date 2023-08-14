import React from "react";
import { useState } from "react";
import "../Dashboard/Dashboard.css"
import home from "../Dashboard/Icons/home-run.svg"
import community from "../Dashboard/Icons/icons8-community-30.png"
import menu from "../Dashboard/Icons/list.png"
import drop from "../Dashboard/Icons/down.png"
import { useNavigate } from "react-router-dom";
const Sidebar=()=>{
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
      };

      let navigate = useNavigate()

      function handleLogout(){
        sessionStorage.removeItem('token')
        navigate('/')
      }
    
   
    return(
      
          <div className="app">
      <div className="sidebar">
        <div className="sidebar-icon"><img src={home} alt="home-icon" style={{marginTop:"160px",left: "27px",width: "26px",height: "26px"}}/></div>
        <div style={{backgroundColor:"white",width:"60px",height:"40px"}}>
        <div className="sidebar-icon" style={{textAlign:"center"}}><img src={community} alt="community icon" style={{ width: '30px', height: '26px',marginTop:"6px"}}/></div>
        </div>
        <div className="sidebar-icon"><img src={menu} className='menu-icon' alt="menubar" style={{ marginTop:"25px",width: '30px', height: '30px'}}/></div>
      </div>
      <div className="content">
        <div className="navbar">
          <div className="logo">Logo</div>
          <div className="user">
            <img
              src="https://cdn.gulte.com/wp-content/uploads/2022/06/Ram-Charan-1.jpg"  alt="useimage"/>
            <img src={drop} alt="dropdown" 
            onClick={toggleDropdown} className="drop" style={{width:"26px",height:"26px",filter:"invert(50%)"}} />
            {showDropdown && (
              <div className="dropdown">
                <ul>
                  <li>Profile</li>
                  <li>Settings</li>
                  <li onClick={handleLogout}>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        </div>
        </div>
    )
}
export default Sidebar