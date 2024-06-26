
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
const Login = () => {
    const{user,signIn} = useContext(AuthContext)
    const handleLogin=(e)=>{
       e.preventDefault();
       const form = new FormData(e.currentTarget);
       const email = form.get('email');
       const password = form.get('password');

       signIn(email,password)
       .then(result=>{
        console.log(result.user);
        alert("successfully login");
       })
       .catch((error)=>{
        console.log(error);
        alert("Incorrect email and password");
       })

    }
    return (
        <div>
       
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form onSubmit={handleLogin}>
      <div className="card-body">
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
          <input type="password"
                name="password"
          placeholder="password" 
          className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-purple-600 font-bold ">Login</button>
        </div>
       
        </div>
        </form>
        <p className="text-center mb-2">Do not have an account <Link className="text-purple-800 font-bold" to="/register">Register</Link></p>
        </div>
    </div>
  </div>
</div>

      
       
    );
};

export default Login;