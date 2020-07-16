import React from 'react'
import { Link } from 'react-router-dom';

// Style 
import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

export default ({title,text}) => {
    return <Result className='welcome' icon={ <SmileOutlined /> }
    title={title}
    extra={<Link to='/users' className='ant-btn ant-btn-primary'>{text}</Link>}/>
}
 
