import React, { useState } from "react";
import {
  emailRegExp,
  getDataJsonStorage,
  passRegExp,
  USER_LOGIN,
} from "../../util/utilMethod";
import { userApi } from "../../service/user/userApi";
import useCustomFormik from "../../hook/useCustomFormik";
import { useMutation } from "@tanstack/react-query";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showNotification } from "../../redux/reducers/notificationReducer";

interface LoginFormValues {
  email: string;
  password: string;
}

type Props = {};

const Login = (props: Props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const mutation = useMutation({
    mutationFn: userApi.postLoginUser,
    onSuccess: (data) => {},
    onError: (error) => {},
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(emailRegExp, "Email invalidate")
      .required("Please input email!"),
    password: Yup.string()
      .matches(
        passRegExp,
        "Password must have 6-10 characters (contains at least 1 numeric character, 1 uppercase character, 1 special character)"
      )
      .required("Please input password!"),
  });

  const formik = useCustomFormik<LoginFormValues>(
    {
      email: "",
      password: "",
    },
    validationSchema,
    (values) => {
      mutation.mutate(values);
      let data = getDataJsonStorage(USER_LOGIN);
      if (data) {
        navigate(0);
      } else {
        dispatch(showNotification("Incorrect password or username"));
      }
    }
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <div>
          <label htmlFor="loginEmail">Email</label>
          <input
            type="email"
            className="form-control rounded-input"
            id="loginEmail"
            placeholder="Enter email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </div>
      </div>
      <div className="form-group">
        <div>
          <label htmlFor="loginPassword">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control rounded-input"
              id="loginPassword"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={togglePasswordVisibility}
                style={{ marginTop: "0px" }}
              >
                <i
                  className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                ></i>
              </button>
            </div>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-danger">{formik.errors.password}</div>
          ) : null}
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Login;
