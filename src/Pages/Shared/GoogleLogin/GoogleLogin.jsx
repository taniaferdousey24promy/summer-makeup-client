import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {

    const {googleSignIn}=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pahtname || "/";
    const handleGoogleSignIn  = ()=>{
        googleSignIn()
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);

            // const saveUser = {name:loggedInUser.displayName , email:loggedInUser.email}
        })
    }
    return (
        <div>
            <div className='divider'>

            </div>
            <div className='w-full text-center my-4'>
                <button onClick={handleGoogleSignIn} className='btn btn-primary btn-outline'>

                    Sign In with <FaGoogle></FaGoogle>
                </button>

            </div>
            
        </div>
    );
};

export default GoogleLogin;