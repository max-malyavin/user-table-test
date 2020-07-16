import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import {usersAsync} from './Redux/Slice/Users'

// Style 
import './scss/app.scss'
import UserInfo from './components/UserInfo/UserInfo';
import ContainerUsers from './components/Users/ContainerUsers';


export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(usersAsync())
  }, [])

  return (
    <div className='app'>
      <div className='app__inner'>

        <Route exact path='/' render={() => <Welcome title='Интерфейс для управления пользователями' text='Вперед!' />} />
        <Route exact path="/users" component={ContainerUsers}/>
        <Route exact path="/users/:userId" component={UserInfo}/>
          
      </div>
    </div>
  );
}
