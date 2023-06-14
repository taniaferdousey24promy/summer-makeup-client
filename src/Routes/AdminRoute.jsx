
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading}=useAuth();
    const [isAdmin,isAdminLoading]=useAdmin();
    const location = useLocation();


    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
        // return <progress className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}}>70%</progress>


    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
     

 

};
  

export default AdminRoute;
