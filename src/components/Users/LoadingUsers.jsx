import React from 'react'
import { Spin } from "antd"

export const loadingUsers = (loading) => !loading && <div 
    style={{marginTop: '50px', textAlign: 'center'}}>
    <Spin size='large' />
    <p>Загрузка данных</p>
</div>
