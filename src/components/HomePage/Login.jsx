import { useState, useContext } from "react";
import { UserContext} from "../context/UserContext"
import {Link} from "react-router-dom"
import login from "../Style/login.css";
export default function Login({ setisshow }) {

  const [loginform, setLoginForm] = useState({
    email:'',
    password:''
  })
  const [email, setEmail] = useState("");
  const [password, setpPassword] = useState("");
  const handleSubmit = (e) => {
    e.prevenDefault();
    const login = {
      // loginform(e.target.value)
    };
    console.log(login);
  };
  const btnlogin = (e) => {
    e.target.color("red");
  };
  const handleClickClosebtn = () => {
    setisshow(false);
  };
  
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
          Đăng Nhập
        </h1>
        <p>
          Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng
          "Lấy mật khẩu"để có thể truy cập vào tài khoản bằng email nhé.
        </p>

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

        <button className="btn-login" onClick={btnlogin} type="Submit">
          Đăng nhập
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
           <Link to='/Form/Register'>About</Link>
          </div>
          <div claasName="forgotpassword">
            <Link to ='/Form/ResetPassword'> Quên Mật Khẩu</Link>
          </div>
       
        </div>
      </form>
    </div>
  );
}
