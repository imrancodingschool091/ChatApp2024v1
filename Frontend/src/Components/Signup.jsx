import "./Auth.css";
import axios from "axios";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Signup() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {

    let UserInfo={


      username:data.username,
      email:data.email,
      password:data.password,
    }


    try {

      let response= await axios.post("http://localhost:4001/user/signup",UserInfo)

      if (response) {
        toast.success(response.data.message,{
          position:"top-center"
        })
        
        localStorage.setItem("SChatApp",JSON.stringify(response.data.newUser))

        setTimeout(() => {
          window.location.reload()
          
        }, 1000);
      }
     else if (!response) {
      toast.warning("User alredy exits",{
        position:"top-center"
      })
        
      }
      
    } catch (error) {

      alert(error)
      
    }



  }

  return (
    <div
      style={{
        backgroundColor: " rgb(13, 12, 12)",
        width: "100%",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Signup Form</h1>

        <input
          type="text"
          placeholder="username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span className="text-red-600">This field is required</span>
        )}
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
          
          
        />
         {errors.email && (
          <span className="text-red-600">This field is required</span>
        )}
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />
         {errors.password && (
          <span className="text-red-600">This field is required</span>
        )}
        <button>Signup</button>
        <div className="message">
          <p>Have an account ?</p>
          <span><Link to={'/login'}> Login</Link></span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
