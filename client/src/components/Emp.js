import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Emp = () => {
    const [users, setUsers] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:5000");
                setUsers(result.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:5000/deleteUser/" + id);
            setUsers(users.filter(user => user._id !== id)); // better than reload
        } catch (err) {
            console.log(err);
        }
    };

    const handleSort = () => {
        const sorted = [...users].sort((a, b) => {
            return sortOrder === "asc" ? a.salary - b.salary : b.salary - a.salary;
        });
        setUsers(sorted);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    return (
        <>
            {/* Main Content */}
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-12 px-5">
                        <div className="card shadow rounded-4 border-0">
                            <div className="card-header d-flex justify-content-between align-items-center bg-primary text-white rounded-top-4">
                                <h4 className="m-0">👨‍💼 EMPLOYEE LIST</h4>
                                <div>
                                    <button
                                        onClick={handleSort}
                                        className="btn btn-light fw-semibold shadow-sm me-2"
                                    >
                                        Sort by Salary {sortOrder === "asc" ? "↑" : "↓"}
                                    </button>
                                    <Link to="/AddEmp" className="btn btn-light fw-semibold shadow-sm">
                                        + Create Employee
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover align-middle">
                                        <thead className="table-light">
                                            <tr>
                                                <th className="text-center">👤 NAME</th>
                                                <th className="text-center">🆔 ID</th>
                                                <th className="text-center">📧 EMAIL</th>
                                                <th className="text-center">🏠 ADDRESS</th>
                                                <th className="text-center">💰 SALARY (₹)</th>
                                                <th className="text-center">⚙️ ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user) => (
                                                <tr key={user._id}>
                                                    <td className="text-center">{user.empname}</td>
                                                    <td className="text-center">{user.id}</td>
                                                    <td className="text-center">{user.email}</td>
                                                    <td className="text-center">{user.address}</td>
                                                    <td className="text-center">₹ {user.salary}</td>
                                                    <td className="text-center">
                                                        <Link
                                                            to={`/Update/${user._id}`}
                                                            className="btn btn-sm btn-outline-warning me-2"
                                                        >
                                                            ✏️ Update
                                                        </Link>
                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() => handleDelete(user._id)}
                                                        >
                                                            🗑️ Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Emp;
