import React from "react";
import { useQuery } from "@tanstack/react-query";
import { userApi } from "../../../service/user/userApi";
import { useNavigate } from "react-router-dom";

type Props = {};

const BasicTablePage = (props: Props) => {
  const navigate = useNavigate();
  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: userApi.getUser,
  });
  const handleEdit = (userId: number) => {
    navigate(`/admin/edit-user/${userId}`);
  };
  const handleDelete = (userId: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      // Thực hiện logic xóa người dùng ở đây
      // Ví dụ: gọi API để xóa người dùng
      // console.log(`Delete user with id: ${userId}`);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Tables</h3>
          <ul className="breadcrumbs mb-3">
            <li className="nav-home">
              <a href="#">
                <i className="icon-home" />
              </a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right" />
            </li>
            <li className="nav-item">
              <a href="#">Tables</a>
            </li>
            <li className="separator">
              <i className="icon-arrow-right" />
            </li>
            <li className="nav-item">
              <a href="#">Basic Tables</a>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-primary mb-5"
          onClick={() => navigate("/admin/add-user-form")}
        >
          Add User
        </button>
        <div className="row">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Responsive Table</div>
            </div>
            <div className="card-body">
              <div className="card-sub">
                Create responsive tables by wrapping any table with
                <code className="highlighter-rouge">.table-responsive</code>
                <code className="highlighter-rouge">DIV</code> to make them
                scroll horizontally on small devices
              </div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((user: any, index: number) => (
                      <tr key={user.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td> {/* Hiển thị role */}
                        <td>
                          <button
                            onClick={() => handleEdit(user.id)}
                            className="btn btn-primary btn-sm me-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="btn btn-danger btn-sm"
                          >
                            Delete
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
  );
};

export default BasicTablePage;
