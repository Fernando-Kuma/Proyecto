import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Rutas from "./routes/Rutas";
import Notification from './utils/Notification';
import Pages from "./pages/Index";
import Services from "./services/Index";

const App = () => {

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
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
      setUser(user);
      setEmail('');
      setPassword('');
    } catch (e) {
      setErrorMessage('Error ' + e);
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
      }
      <Notification message={errorMessage} />
    </div>
  )
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}