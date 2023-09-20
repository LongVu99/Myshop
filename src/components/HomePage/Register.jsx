import React from 'react';
import { useForm } from 'react-hook-form';
import Login from "./Login"
import {Link} from "react-router-dom"
import login from "../Style/login.css";
export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    
    <div className="box-form">
    <form className="infoform" onSubmit={handleSubmit}>
      <i
        style={{ float: "right" }}
        className="fas fa-times"
        onClick={handleClickClosebtn}
      ></i>
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          color: "#231f20",
          fontWeight: "700",
        }}
      >
        Đăng Kí
      </h1>
      <p>
        Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng
        "Lấy mật khẩu"để có thể truy cập vào tài khoản bằng email nhé.
      </p>
      <input
        type="text"
        id="name"
        name="name"
       
        // onChange={(e) => setEmail(e.target.value)}
        placeholder="Nhập tên của bạn "
      ></input>{" "}

      <input
        type="email"
        id="email"
        name="email"
        value={email}
        // onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your name or email"
      ></input>{" "}

      <input
        type="password"
        id="password"
        name="password"
        value={password}
        // onChange={(e) => setpPassword(e.target.value)}
        placeholder="Enter your password"
      ></input>

        <input
        type="text"
        id="number_phone"
        name="password"
        value={number_phone}
        // onChange={(e) => setpPassword(e.target.value)}
        placeholder="Enter your number_phone"
      ></input>
      <button className="btn-login" onClick={btnlogin} type="Submit">
        Đăng Kí
      </button>

      <p style={{ textAlign: "center", marginTop: "10px" }}>Hoặc</p>
      <button className="btn-loginface" type="Submit">
        Đăng nhập với FaceBook
        <i style={{ marginLeft: "5px" }} className="fab fa-facebook-f"></i>
      </button>

      <button className="btn-login__google" type="Submit">
        Đăng nhập với google
        <i style={{ marginLeft: "5px" }} className="fab fa-google-plus-g"></i>
      </button>


      <div style={{display:"flex", justifyContent:"space-between",textDecoration:"none"}}>
        
         <div className="register">
         <Link to='/Form/Register'>Quên Mật Khẩu</Link>
        </div>
        <div claasName="forgotpassword">
          <Link to ='/Form/ResetPassword'> Quên Mật Khẩu</Link>
        </div>
     
      </div>
    </form>
  </div>
  );
}