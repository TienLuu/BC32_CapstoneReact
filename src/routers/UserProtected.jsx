// Import Library's Hook
import { useLocation, Navigate } from "react-router-dom";

const UserProtected = ({ children }) => {
   const typeUser = "user";

   const location = useLocation();

   if (!typeUser) {
      const url = `/signin?redirectUrl=${location.pathname}`;
      return <Navigate to={url} replace />;
   }

   return children;
};

export default UserProtected;
