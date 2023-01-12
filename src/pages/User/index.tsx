import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Typography } from 'antd'
import { useEffect, useReducer, useState } from 'react'
import { IProfileData } from '../../common/types'
import { initialUserState, userReducer } from '../../reducers/userReducer'
import axiosInstance from '../../services/axiosInstance'
import Quotes from '../Quotes'

const User = () => {
  const [quoteVisible, setQuoteVisible] = useState(false)

  const [loading, setLoading] = useState(true)
  const [details, dispatch] = useReducer(userReducer, initialUserState)

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get<IProfileData>(`/profile?token=${token}`)

        if (res.data.success) {
          dispatch({ type: 'SET_USER_DATA', payload: res.data.data })
        }
        setLoading(false)
      } catch (err) {
        console.error(err)
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  if (!details.fullname) {
    return <p>{loading ? 'Loading' : 'No Details Found!'}</p>
  }

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
      <Avatar
        style={{ marginRight: '10px' }}
        size={80}
        src={details.avatar ? details.avatar : null}
        icon={details.avatar ? '' : <UserOutlined />}
      />
      <div>
        <Typography.Title level={3}>Welcome, {details.fullname}! </Typography.Title>
        <Button type='primary' onClick={() => setQuoteVisible(true)}>
          Update
        </Button>
        <Quotes isVisible={quoteVisible} onCancel={() => setQuoteVisible(false)} />
      </div>
    </div>
  )
}

export default User
