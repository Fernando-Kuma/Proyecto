import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import Rutas from "./routes/Rutas";
import Notification from './utils/Notification';
import Pages from "./pages/Index";
import Services from "./services/Index";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const App = () => {

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      Services.Global.setToken(user.access_token)
    }
  }, [])

  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await Services.Login.login({
        email,
        password
      });
      console.log(user);
      window.localStorage.setItem(
        'loggedAppUser', JSON.stringify(user)
        );
      Services.Global.setToken(user.access_token)
      setUser(user);
      setEmail('');
      setPassword('');
    } catch (e) {
      setErrorMessage(' ' + e);
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <div className="App">

      {
        user
          ?
          <div>
            <Rutas />
          </div>
          :
          <div >
            <Notification message={errorMessage} />
            <Pages.SignIn
            email={email}
            password={password}
            handleEmailChange={
              ({ target }) => setEmail(target.value)
            }
            handlePasswordChange={
              ({ target }) => setPassword(target.value)
            }
            handleSubmit={handleLogin}
          />
          </div>
      }

    </div>
  )
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}