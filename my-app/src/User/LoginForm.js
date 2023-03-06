import { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';
import './LoginForm.scss';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

function LoginForm(props) {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      username: username,
      password: password
    };

    try {
      const response = await axios.post('http://localhost:8080/api/login_check', data);
      if (response.data.token) {
        Cookies.set('token', response.data.token, { secure: true, sameSite: 'strict' });
        const decodedToken = jwtDecode(response.data.token);
        setUser({ username: username, pseudo: decodedToken.pseudo });
        setErrorMessage('');
        props.onSuccess();
      }
    } catch (error) {
      setErrorMessage('Invalid username or password');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <div>{errorMessage}</div>}
      <label htmlFor="username">Nom d'utilisateur</label>
      <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
      <label htmlFor="password">Mot de passe</label>
      <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Connexion</button>
    </form>
  );
}

export default LoginForm;
