import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);


    if(loading){
        return <progress className="progress w-56"></progress>
        // return <progress className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}}>70%</progress>


    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
     

 

};
  

export default PrivateRoutes;
