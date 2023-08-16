import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import sort from "./Icons/sort.svg";
import filter from "./Icons/filter.png";
import edit from "./Icons/draw.png";
import bin from "./Icons/bin.png";
import search from "./Icons/search.png";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Side_Navbar/Sidebar";

function Dashboard() {
  const [data, setData] = useState([]);
  const [editData, setEditedData] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleCreate() {
    navigate("/postform");
  }

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    fetch("https://survey-from-backend-la8p.onrender.com/userpost", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDeletePost = (postId) => {
    const token = sessionStorage.getItem("token");
    fetch(`https://survey-from-backend-la8p.onrender.com/userpost/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())

      .then((data) => {
        setData((prevData) => prevData.filter((item) => item._id !== postId));
      })
      .catch((error) => console.error("Error deleting post:", error));
  };
  //....................................................................................
  function handleEditPost(PostId, e) {
    e.stopPropagation(false);
    setError(true);

    const postToEdit = data.find((item) => item._id === PostId);
    setEditedData({ ...editData, [PostId]: { ...postToEdit } });
  }

  const handleSaveEdit = (postId) => {
    const token = sessionStorage.getItem("token");

    fetch(`https://survey-from-backend-la8p.onrender.com/userpost/${postId}`, {
      method: "PUT",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editData[postId]),
    })
      .then((response) => response.json())
      .then((updatedRecord) => {
        setData((prevData) =>
          prevData.map((item) =>
            item._id === postId ? updatedRecord.data : item
          )
        );

        setEditedData({ ...editData, [postId]: {} });
        setError(false);
      })
      .catch((error) => console.error("Error updating post:", error));
  };
  //......................................................................................
  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <div className="toolbar">
          <div className="left-section">
            <span className="search-name">
              <b>Search list</b>
            </span>
            <div className="search-icon">
              <div className="custom-icon">
                <img
                  src={search}
                  style={{
                    width: "18px",
                    height: "18px",
                    filter: "invert(50%)",
                  }}
                  alt="search icon"
                />
              </div>
              {/* <div className="search-line"></div> */}
              <input type="search" className="search-input" />
            </div>
          </div>
          <div className="right-section">
            <div className="icons">
              <img src={sort} alt="" />
            </div>
            <div className="icons">
              <img
                src={filter}
                alt=""
                style={{ width: "26px", height: "26px", filter: "invert(50%)" }}
              />
            </div>
            <button className="create-button" onClick={handleCreate}>
              Create
            </button>
          </div>
        </div>
        <table className="table">
          <thead className="tablehead">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="tablebody">
            {data.map((item) => (
              <tr key={item._id}>
                <td>
                  {error && editData[item._id] ? (
                    <input
                      type="text"
                      value={editData[item._id].Name}
                      onChange={(e) =>
                        setEditedData((prevEditData) => ({
                          ...prevEditData,
                          [item._id]: {
                            ...editData[item._id],
                            Name: e.target.value,
                          },
                        }))
                      }
                    />
                  ) : (
                    item.Name
                  )}
                </td>
                <td>
                  {error && editData[item._id] ? (
                    <input
                      type="text"
                      value={editData[item._id].Description}
                      onChange={(e) =>
                        setEditedData((prevEditData) => ({
                          ...prevEditData,
                          [item._id]: {
                            ...editData[item._id],
                            Description: e.target.value,
                          },
                        }))
                      }
                    />
                  ) : (
                    item.Description
                  )}
                </td>
                <td>
                  {error && editData[item._id] ? (
                    <input
                      type="text"
                      value={editData[item._id].Type}
                      onChange={(e) =>
                        setEditedData((prevEditData) => ({
                          ...prevEditData,
                          [item._id]: {
                            ...editData[item._id],
                            Type: e.target.value,
                          },
                        }))
                      }
                    />
                  ) : (
                    item.Type
                  )}
                </td>
                <td>
                  {error && editData[item._id] ? (
                    <input
                      type="date"
                      value={editData[item._id].Start_Date}
                      onChange={(e) =>
                        setEditedData((prevEditData) => ({
                          ...prevEditData,
                          [item._id]: {
                            ...editData[item._id],
                            Start_Date: e.target.value,
                          },
                        }))
                      }
                    />
                  ) : (
                    item.Start_Date
                  )}
                </td>
                <td>
                  {error && editData[item._id] ? (
                    <input
                      type="date"
                      value={editData[item._id].End_Date}
                      onChange={(e) =>
                        setEditedData((prevEditData) => ({
                          ...prevEditData,
                          [item._id]: {
                            ...editData[item._id],
                            End_Date: e.target.value,
                          },
                        }))
                      }
                    />
                  ) : (
                    item.End_Date
                  )}
                </td>
                <td>
                  {error && editData[item._id] ? (
                    <>
                      <button
                        className="signbtn"
                        onClick={() => handleSaveEdit(item._id)}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <img
                        src={edit}
                        alt="edit"
                        onClick={(e) => handleEditPost(item._id, e)}
                        style={{
                          height: "26px",
                          width: "26px",
                          filter: "invert(50%)",
                          margin: "5px",
                        }}
                      />
                      <img
                        src={bin}
                        alt="delete"
                        onClick={() => handleDeletePost(item._id)}
                        style={{
                          height: "26px",
                          width: "26px",
                          filter: "invert(50%)",
                        }}
                      />
                    </>
                  )}
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
