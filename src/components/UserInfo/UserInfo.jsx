import React, { useEffect } from 'react'
import {  withRouter, Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getUser, selectState } from '../../Redux/Slice/UserInfo';

// Style
import { Descriptions } from 'antd';
import Loading from './Loading';

function UserInfo ({match}){

     const dispatch = useDispatch()
     const {user,loading} = useSelector(selectState)
 
     useEffect(() => {
            let userId = match.params.userId
            dispatch(getUser(userId))
      },[match.params.userId]);
    

    if(!loading) {
        return <Loading size='large'/>
    }
  
    debugger
    return <div className='userInfo'>
        <Descriptions title="Информация об аккаунте">
            {Description(user)}
        </Descriptions> 
    <span><Link to='/users'>Обратно в список</Link></span>
  </div> 
}


function Description(user) {
    const newData = Object.keys(user).filter(item => item !== 'company' && item !== 'address')
    return <>
        {newData.map((item,index)=> <Descriptions.Item key={index} 
                                    label={item}>{user[item]}</Descriptions.Item> )}
    </>
}

export default connect(null,null)(withRouter(UserInfo));
