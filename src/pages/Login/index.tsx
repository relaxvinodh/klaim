import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ILoginData } from '../../common/types'
import axiosInstance from '../../services/axiosInstance'

interface FormData {
  email: string
  password: string
}

const Login = () => {
  const [error, setError] = useState<string>('')

  const navigate = useNavigate()

  const onFinish = async ({ password, email }: FormData) => {
    try {
      const res = await axiosInstance.post<ILoginData>(`/login`, { email, password })

      if (res.data.success) {
        window.localStorage.setItem('token', res.data.data.token)
        navigate('/profile', { replace: true })
      } else {
        console.error('Login has Failed')
      }
    } catch (err: any) {
      // error can be anything
      console.error('Unable to login', err)
      setError(err)
    }
  }

  return (
    <Form
      className='form-login'
      name='basic'
      layout='vertical'
      onFinish={onFinish}
      autoComplete='off'
      validateMessages={validateMessages}
    >
      <Form.Item label='Email addess' name='email' rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>

      <Form.Item label='Password' name='password' rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
        <span className='error-message'>{error}</span>
      </Form.Item>
    </Form>
  )
}

export default Login

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!'
  }
}
