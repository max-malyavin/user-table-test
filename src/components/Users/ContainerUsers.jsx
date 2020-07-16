import React from 'react'
import Users from './Users'
import { useSelector } from 'react-redux'
import { selectState } from '../../Redux/Slice/Users'

export default () => {

    const state = useSelector(selectState)
    const errors = useSelector(state => state.UI)






    return <Users {...state} errors={errors} />
}

