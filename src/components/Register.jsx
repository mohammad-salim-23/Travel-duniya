import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";



const Register = () => {
   
    const {user,createUser} = useContext(AuthContext);
    const handleRegister=(e)=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name,email,password);

        // strong password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
        if(password.length<6){
            alert("You must have use 6 characters or more");
            return;
        }
        if(!passwordRegex.test(password)){
            alert("you must have one uppercase and one lowercase character")
            return;  
        }
        // create user
        createUser(email,password)
        .then((result)=>{
            console.log(result.user);
          alert("Successfully Register");
        }).catch((error)=>{
            console.log(error);
            alert("Something Wrong. Please check again your email and password")
        })
    }
    return (
        <div>
       <form onSubmit={handleRegister}>
       <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register now!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-purple-600">Register</button>
        </div>
      </div>
    </div>
  </div>
</div>
       </form>
        </div>
    );
};

export default Register;