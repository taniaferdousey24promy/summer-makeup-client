
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';

const SignUp = () => {
    

    const {register,handleSubmit,formState: {errors}}=useForm();
    const {createUser} = useContext(AuthContext);
    const onSubmit =(data)=>{
        console.log(data);
   

    createUser(data.email,data.password)
        .then(result =>{
            const loggedUdser = result.user;
            console.log(loggedUdser);
        })
    };
    return (
        <div>
      <div className="hero pt-20  pb-12  bg-base-100">
        <div className="hero-content w-[500px] flex-col lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                <h1 className="font-bold text-5xl">Sign Up Now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name",{required:true})}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {
                    errors.name && (
                        <span className='text-red-600'>Name is required</span>
                    )
                }
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email",{required:true})}
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
                {
                    errors.email && (
                        <span className='text-red-600'>Email is required</span>
                    )
                }
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password",{required:true, minLength:6, maxLength:20,pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                {
                    errors.password?.type=== 'required' && 
                        <p className='text-red-600'>Password is required</p>
                    
                }
                {
                    errors.password?.type=== 'minLength' && 
                        <p className='text-red-600'>Password must be 6 characters</p>
                    
                }
                {
                    errors.password?.type === 'pattern' &&
                    <p className="text-red-600">Password must have one uppercase ,one lowercase ,one number and one soecial characters</p>
                }
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Sign Up</button> */}
                <input className='btn btn-primary' type="submit" value="Sign Up" />
              </div>
            </form>
            <p><small>
              Already Have An Account ? <Link className='text-pink-600' to="/login">LOGIN</Link>
              </small></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;