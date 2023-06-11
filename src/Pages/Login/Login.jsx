import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {

    const {signIn}=useContext(AuthContext);

    const handleLogin =(event)=>{
        event.preventDefault();
        const form=event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
            .then((result)=>{
                const user = result.user;
                console.log(user);
            });

    };
  return (
    <div>
      <div className="hero pt-20  pb-12  bg-base-100">
        <div className="hero-content w-[500px] flex-col lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">

                <h1 className="font-bold text-5xl">Login Now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
