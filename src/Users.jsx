import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTasks, setSelectedTasks] = useState([]);

  const fecthData = () => {
    axios
      .get("https://todoappbackendgk.onrender.com/")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fecthData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("https://todoappbackendgk.onrender.com/deleteTask/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();

    setSearch(searchValue);

    if (searchValue === "") {
      fecthData();
    } else {
      const filteredData = data.filter((user) =>
        user.title.toLowerCase().includes(searchValue)
      );

      setData(filteredData);
    }
  };


  const handleCheckboxChange = (e, taskId) => {
    if (e.target.checked) {
      setSelectedTasks([...selectedTasks, taskId]);
    } else {
      setSelectedTasks(selectedTasks.filter(id => id !== taskId));
    }
  };

  const handleDeleteSelected = () => {
    selectedTasks.forEach(id => {
      axios.delete("https://todoappbackendgk.onrender.com/deleteTask/" + id)
        .then(res => {
          console.log(res);
          // You might want to update the UI after deletion, such as refetching the data.
          fecthData();
        })
        .catch(err => console.log(err));
    });
    setSelectedTasks([]); // Clear the selected tasks after deletion
  };

  return (
    <>
      <div style={{ float: "right" }}>
        <Link to="/">
          {" "}
          <button className="btn btn-primary">Logout</button>{" "}
        </Link>
      </div>
      <br />
      <br />
    

      <div className="container mt-5">
        <Link to="/create" className="btn btn-primary">
          AddTask+
        </Link>
        <h1 style={{textAlign:"center",color:"red"}}>Total List Of Tasks  </h1>
        <input
          className="form-control w-50 m-2 mx-auto"
          type="search"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
          style={{border:"1px solid black"}}
        />
         <button className="btn btn-danger" onClick={handleDeleteSelected}>
        Delete Selected
      </button>


        {data.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="card"
                style={{
                  width: "60rem",
                  border: "1px solid black",
                  margin: "10px",
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                }}
              >
             
                <p
                  className="btn btn-info"
                  style={{ width: "40px", margin: "3px",fontSize:"20px" }}
                >
                  <b>{index + 1}</b>
                  <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, item._id)}
                  checked={selectedTasks.includes(item._id)}
                  style={{fontSize:"50px"}}
                />
                </p>
                <div className="card-body">
                  <h5 className="card-title">
                    <b style={{ color: "red" }}>TaskName:</b>&nbsp;{item.title}
                  </h5>
                  <h5 className="card-text">
                    <b style={{ color: "red" }}>Descri:</b>
                    {item.descri}
                  </h5>
                  <h5>
                    <b style={{ color: "red" }}>DeadLine:</b>
                    {item.deadline}
                  </h5>
                  <Link to={`/update/${item._id}`}>
                    {" "}
                    <button className="btn btn-warning m-2">Edit</button>
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users;
