import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateEmp = () => {

  const navigate = useNavigate()

  const [users, setUsers] = useState({
    empname: '',
    id: '',
    email: '',
    address: '',
    salary: '',
  });
  const { id } = useParams()


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/getUsers/" + id);
        setUsers(result.data)

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const update = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.put(`http://localhost:5000/updateUser/${id}`, users);
      alert("User updated successfully");
      navigate("/")

    } catch (err) {
      console.log(err);
      alert("Failed to update user");
    }
  }


  return (
    <div className="container mt-5">
      <div className="card p-5 shadow-lg border-0 rounded-4">
        <h1 className="mb-4 text-center text-primary fw-bold">Update Employee</h1>
        <form onSubmit={update}>
          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                name="empname"
                className="form-control form-control-lg rounded-3"
                value={users.empname}
                onChange={handleChange}
                placeholder="Enter full name"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">ID</label>
              <input
                type="number"
                name="id"
                className="form-control form-control-lg rounded-3"
                value={users.id}
                onChange={handleChange}
                placeholder="Enter employee ID"
                disabled
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg rounded-3"
                value={users.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Address</label>
              <input
                type="text"
                name="address"
                className="form-control form-control-lg rounded-3"
                value={users.address}
                onChange={handleChange}
                placeholder="Enter address"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Salary</label>
              <input
                type="number"
                name="salary"
                className="form-control form-control-lg rounded-3"
                value={users.salary}
                onChange={handleChange}
                placeholder="Enter salary amount"
              />
            </div>
          </div>

          <div className="text-center mt-5">
            <button type="submit" className="btn btn-success btn-lg px-5 rounded-pill shadow">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
