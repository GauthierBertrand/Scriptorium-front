import { useState } from 'react';
import axios from 'axios';

const SignUpForm = (props) => {
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleResendActivation = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:8080/resend-activation', {
        email: email,
      });
      setSuccessMessage('Un nouvel e-mail d\'activation a été envoyé.');
    } catch (error) {
      setErrorMessage('Une erreur s\'est produite lors de l\'envoi de l\'e-mail d\'activation.');
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas.');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*\d).{8,64}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage('Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/inscription', {
        pseudo: pseudo,
        email: email,
        password: password
      });
      setSuccessMessage('Inscription réussie. Veuillez activer votre compte en cliquant sur le lien qui vous a été envoyé par e-mail.');
      setIsSubmitted(true);
      setPseudo('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
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
            <form className="signup-form" onSubmit={handleSubmit}>
              <label htmlFor="username">Nom d'utilisateur</label>
              <input type="text" id="pseudo" value={pseudo} onChange={(event) => setPseudo(event.target.value)} />
              <label htmlFor="email">Adresse e-mail</label>
              <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
              <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
              <button type="submit">S'inscrire</button>
          {isSubmitted && (
            <>
              <button type="button" onClick={handleResendActivation}>Renvoyer l'e-mail d'activation</button>
              {successMessage && <div className="success-message">{successMessage}</div>}
            </>
          )}
          {!isSubmitted && <button type="button" onClick={props.onClose}>Annuler</button>}
        </form>
      </>
    )}
  </div>
</div>
);
};

export default SignUpForm;