import React from 'react'
import { Spin, Tag } from "antd";



export const successDelete = (currentID,id,success) => currentID == id && !success && <Spin className='succes__delete' size='small' />

export const failedDelete = (currentID,id, failed, text = 'Ошибка') => currentID == id && failed && <Tag 
className='failed__delete' color="error">{text}</Tag>