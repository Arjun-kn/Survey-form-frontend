import React, { useState,useEffect } from 'react';
import './Dashboard.css';
import home from "./Icons/home-run.svg"
import community from "./Icons/icons8-community-30.png"
import menu from "./Icons/list.png"
import sort from "./Icons/sort.svg"
import filter from "./Icons/filter.png"
import edit from "./Icons/draw.png"
import bin from "./Icons/bin.png"
import drop from "./Icons/down.png"

function Dashboard() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {

    fetch('http://localhost:8080/userpost') 
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
      console.log(data)
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-icon"><img src={home} alt="" style={{marginTop:"160px",left: "27px",width: "26px",height: "26px"}}/></div>
        <div style={{backgroundColor:"white",width:"70px",height:"40px"}}>
        <div className="sidebar-icon" style={{textAlign:"center"}}><img src={community} alt="" style={{ width: '30px', height: '26px',marginTop:"6px"}}/></div>
        </div>
        <div className="sidebar-icon"><img src={menu} className='menu-icon' alt="" style={{ marginTop:"25px",width: '30px', height: '30px'}}/></div>
      </div>
      <div className="content">
        <div className="navbar">
          <div className="logo">Logo</div>
          <div className="user">
            <img
              src="https://cdn.gulte.com/wp-content/uploads/2022/06/Ram-Charan-1.jpg" />
            <img src={drop} alt="dropdown" 
            onClick={toggleDropdown} style={{width:"26px",height:"26px",filter:"invert(50%)"}} />
            {showDropdown && (
              <div className="dropdown">
                <ul>
                  <li>Profile</li>
                  <li>Settings</li>
                  <li>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="main-content">
        <div className="toolbar">
        <div className="left-section">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="right-section">
        <div className="icons">
            <img src={sort} alt="" />
        </div>
        <div className='icons'>
        <img src={filter} alt="" style={{width:"26px",height:"26px",filter:"invert(50%)"}} />
        </div>
          <button className="create-button">Create</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.type}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              <td>
               <img src={edit} alt="edit" style={{height:"26px",width:"26px",filter:"invert(50%)"}} />
               <img src={bin} alt="delete" style={{height:"26px",width:"26px",filter:"invert(50%)"}} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    </div>
  );
}

export default Dashboard;
