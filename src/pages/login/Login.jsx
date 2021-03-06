import { useContext, useState } from 'react';
import './login.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authentication/AuthContext';
function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({
          type: 'LOGIN',
          payload: user,
        });
        navigate('/');
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Submit</button>
        {error && <span>Wrong Email or password</span>}
      </form>
    </div>
  );
}

export default Login;
