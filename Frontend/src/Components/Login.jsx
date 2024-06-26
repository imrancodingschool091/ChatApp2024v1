
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Auth.css"; // Assuming this file exists and contains the necessary styles
import { toast } from "react-toastify";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const UserInfo = {
     
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:4001/user/login", UserInfo);

      if (response) {
        toast.success(response.data.message,{
          position:"top-center"
        })
        localStorage.setItem("SChatApp",JSON.stringify(response.data.user))
        
        setTimeout(() => {
          window.location.reload()
          
        }, 1000);
      } else {
        toast.warning("Invalid login credentials",{
          position:"top-center"
        })
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Invalid login credentials");
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="auth-container"  style={{
      backgroundColor: " rgb(13, 12, 12)",
      width: "100%",
      height: "100vh",
    }}>
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
        <h1>Login Form</h1>

       

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <span className="text-red-600">{errors.email.message}</span>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <span className="text-red-600">{errors.password.message}</span>}

        <button type="submit">Login</button>

        <div className="message">
          <p>Don't have an account?</p>
          <span><Link to={'/signup'}>Signup</Link></span>
        </div>
      </form>
    </div>
  );
}

export default Login;
