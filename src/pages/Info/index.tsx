import { Typography } from 'antd'
import { useEffect, useState } from 'react'
import { IInfoData } from '../../common/types'
import axiosInstance from '../../services/axiosInstance'

interface Details {
  info: string
}

const Info = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [details, setDetails] = useState<Details>({
    info: ''
  })
  useEffect(() => {
    axiosInstance
      .get<IInfoData>(`/info`)
      .then(({ data: { data, success } }) => {
        if (success) {
          setDetails(data)
          setLoading(false)
        }
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return <Typography.Title>{loading ? 'Loading' : details.info}</Typography.Title>
}

export default Info
