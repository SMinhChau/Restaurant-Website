import { Navigate } from 'react-router-dom';
import { UserAuth } from '~/contexts/AuthContext';
function ProtectRouter({ children }) {
 const { user } = UserAuth();
 if (!user) {
  return <Navigate to="/"></Navigate>;
 }
 return children;
}

export default ProtectRouter;
