import React, { useState,useEffect } from 'react';
import './Dashboard.css';
import sort from "./Icons/sort.svg"
import filter from "./Icons/filter.png"
import edit from "./Icons/draw.png"
import bin from "./Icons/bin.png"
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Side_Navbar/Sidebar';

function Dashboard() {
  
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState({})
  const navigate = useNavigate()

  function handleCreate(){
    navigate('/postform')
  }

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    console.log(token)
    fetch('http://localhost:8080/userpost', {
      method: 'GET',
      headers: {
        'Authorization': `${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setData(data.data); 
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
   
  }, []);

  const handleDeletePost = (postId) => {
    const token = sessionStorage.getItem('token');
    fetch(`http://localhost:8080/userpost/${postId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
    })
    .catch(error => console.error('Error deleting post:', error));
  };

  return (
    <div >
      <Sidebar/>
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
          <button className="create-button" onClick={handleCreate}>Create</button>
        </div>
      </div>
      <table className='table'>
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
            <tr key={item._id}>
              <td>{item.Name}</td>
              <td>{item.Description}</td>
              <td>{item.Type}</td>
              <td>{item.Star_Date}</td>
              <td>{item.End_Date}</td>
              <td>
               <img src={edit} alt="edit" style={{height:"26px",width:"26px",filter:"invert(50%)",margin:"5px"}} />
               <img src={bin} alt="delete" onClick={() => handleDeletePost(item.id)} style={{height:"26px",width:"26px",filter:"invert(50%)"}} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
   
  );
}

export default Dashboard;
