import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import LoginForm from "./../form/LoginForm";
import loginService from './../services/login'; 
import userService from './../services/usuarios'; 
import Usuarios from './Usuarios'
import Notification from './../utils/Notification';
import NavBar from "./../menu/Navbar";


const Index = () => {
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setUser(user)      
          userService.setToken(user.token)
        }
      }, [])
    
      const [errorMessage, setErrorMessage] = useState(null);
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [user, setUser] = useState('');


      const handleLogout = () => {
        setUser(null)
        userService.setToken(null)
        window.localStorage.removeItem('loggedAppUser')
      }


      const handleLogin = async (event) => {
          event.preventDefault();
          console.log();
          try {
              const user = await loginService.login({
                  email,
                  password
                });
                console.log(user);
              window.localStorage.setItem(
                'loggedAppUser', JSON.stringify(user)
                )
                userService.setToken(user.token)
              setUser(user);
              setEmail('');
              setPassword('');
          }catch(e){
              setErrorMessage('Error ' + e);
              setTimeout(() => {
                  setErrorMessage(null)
              }, 5000)
          }   
      }

      

    return (
        <div>
            
            {
                user
                    ? 
                    <div className="App">
                        <NavBar handleLogout={handleLogout} />
                        <Usuarios />
                    </div>
                    : 
                    <LoginForm
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

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
