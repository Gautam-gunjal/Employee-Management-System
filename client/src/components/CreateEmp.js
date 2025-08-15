import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CreateEmp = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    empname: "",
    id: "",
    email: "",
    address: "",
    salary: ""
  })

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value })

  }

  const submit = async (e) => {
    e.preventDefault();
    try {
      const EmployeeData = await axios.post("http://localhost:5000/createEmp", employee);

      navigate("/")
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <div className="container mt-5">
      <div className="card p-5 shadow-lg border-0 rounded-4">
        <h1 className="mb-4 text-center text-primary fw-bold">Add New Employee</h1>
        <form onSubmit={submit}>
          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                name="empname"
                className="form-control form-control-lg rounded-3"
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
                onChange={handleChange}
                placeholder="Enter employee ID"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg rounded-3"
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
                onChange={handleChange}
                placeholder="Enter salary amount"
              />
            </div>
          </div>

          <div className="text-center mt-5">
            <button type="submit" className="btn btn-success btn-lg px-5 rounded-pill shadow">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>

  );

}

export default CreateEmp;