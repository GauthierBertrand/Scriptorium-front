import { useState } from 'react';
import axios from 'axios';

const SignUpForm = (props) => {
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/inscription', {
        pseudo: pseudo,
        email: email,
        password: password
      });
      setSuccessMessage('Inscription réussie. Vous pouvez maintenant vous connecter.');
      setPseudo('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setSuccessMessage('');
        props.onSuccess();
      }, 5000);
    } catch (error) {
      setErrorMessage('Une erreur s\'est produite lors de l\'inscription.');
      console.log(error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {successMessage ? (
          <div className="success-message">{successMessage}</div>
        ) : (
          <>
            <h2>Inscription</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Nom d'utilisateur</label>
              <input type="text" id="pseudo" value={pseudo} onChange={(event) => setPseudo(event.target.value)} />
              <label htmlFor="email">Adresse e-mail</label>
              <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
              <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
              <button type="submit">S'inscrire</button>
              <button type="button" onClick={props.onClose}>Annuler</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
