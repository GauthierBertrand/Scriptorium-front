import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const Profile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/classes');
  };

  return (
    <div>
      <h1>Welcome back!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
