import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteUserAsync, editUser} from '../../Redux/Slice/Users'

// Style
import { Table, Spin, Alert, Tag,Modal,Input,Button, Form } from 'antd';
import { validateMessages } from '../../Common/Validate/Validate';
import { successDelete, failedDelete } from './ErrorsDelete';
import { loadingUsers } from './LoadingUsers';
import { Link } from 'react-router-dom';





export default ({users,loading,success,failed,errors}) => {


    const [visibleFormEdit, setFormEditVisible] = useState(false)
    const [visible, setVisible] = useState(false)
    const [currentID, setcurrentID] = useState(null)
    const Initialitem = users.length &&  users.find(item=> item.id == currentID)
    const dispatch = useDispatch()


    function deleteUser(id) {
        setcurrentID(id)
        setVisible(true)
        dispatch(deleteUserAsync(id))
    }

    function handleDelete(id) {
        setVisible(true)
        setcurrentID(id)
    }

     const onFinishEdit = (values) => {
        const {username, Email} = values
        dispatch(editUser(currentID,username,Email))
        setTimeout(() => {
            setFormEditVisible(false)
        }, 2000); 
    };
    

    const columns = [
        { title: 'Имя', dataIndex: 'username', key: 'username' },
        { title: 'Номер', dataIndex: 'id', key: 'id' },
        { title: 'Почта', dataIndex: 'email', key: 'email' },
        {
          title: 'Действия',
          render: ({id}) => { 
              return <> 
            <a className='users__delete' onClick={() => handleDelete(id)}>
                 Удалить
                {successDelete(currentID,id,success)}
                {failedDelete(currentID,id,failed)}
            </a>
            
            <a onClick={() =>{
                setcurrentID(id)
                setFormEditVisible(true)
                }} className='users__edit'>     
                 Редактировать
               </a>
            <Link to={`users/${id}`}>     
                 В профиль
            </Link>
            </>
          },
        },
      ];

    return <div> <Table columns={columns} dataSource={users}/>

      {loadingUsers(loading)}
      
       {/* { Можно было разнести на компонент} */}
    {errors.errors.length ? <Alert message={errors.errors[0].message}
     description={<span>Статус: {errors.errors[0].status}</span>} type="error"/> : null}
            <Modal title="Basic Modal" visible={visible}
              onOk={()=> {
                setVisible(false)
                dispatch(deleteUserAsync(currentID))
                }}
            onCancel={() => setVisible(false)}>
            Вы точно уверены удалить?
            </Modal>
         
         {/* { Можно было разнести на компонент} */}
        {visibleFormEdit &&  
             <Modal title="Basic Modal" visible={visibleFormEdit}
              onOk={()=> {setFormEditVisible(false)}}
              onCancel={() => setFormEditVisible(false)} >

             <Form name="basic" onFinish={onFinishEdit} 
            initialValues={{ username: Initialitem.username,Email: Initialitem.email}}
                    validateMessages={validateMessages}>
               <Form.Item label="Имя" name="username"
                 rules={[{ required: true, message: 'Пожалуйста введите имя' }]}>
                 <Input />
                </Form.Item>
                <Form.Item label="Почта" name="Email" rules={[{ type: 'email',required: true,  }]}>
                <Input />
               </Form.Item>
                <Form.Item >
                   <Button type="primary" htmlType="submit">
                    Редактировать
                   </Button> 
               </Form.Item>
             </Form> 

            {!success && <Spin size='small' />}

            {failed && <Tag color="error">Ошибка</Tag>}

           </Modal>
           }               
    </div>
}
