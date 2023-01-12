import { Button, Modal } from 'antd'
import { useEffect, useState } from 'react'
import { IAuthorData, IQuoteData } from '../../common/types'
import axiosInstance from '../../services/axiosInstance'

interface IQuoteProps {
  isVisible: boolean
  onCancel(): void
}

const controller = new AbortController()

const Quotes = ({ isVisible, onCancel }: IQuoteProps) => {
  const [loadingUserDetails, setLoadingUserDetails] = useState(true)
  const [loadingQuote, setLoadingQuote] = useState(true)
  const [quote, setQuote] = useState<IQuoteData['data']>({
    quoteId: -1,
    authorId: -1,
    quote: ''
  })
  const [author, setAuthor] = useState<IAuthorData['data']>({
    authorId: -1,
    name: ''
  })

  useEffect(() => {
    if (isVisible) {
      const fetchAuthor = async () => {
        const token = window.localStorage.getItem('token')
        try {
          const authorData = await axiosInstance.get(`/author?token=[${token}]`, {
            signal: controller.signal
          })

          if (authorData.data.data) {
            setAuthor(authorData.data.data)
            setLoadingUserDetails(false)
            const quotesData = await axiosInstance.get(
              `/quote?token=[${token}]&authorId=[${authorData?.data?.data?.authorId}]`,
              {
                signal: controller.signal
              }
            )
            setQuote(quotesData.data.data)
          }
          setLoadingQuote(false)
        } catch (err) {
          console.error(err)
          setLoadingQuote(false)
        }
      }
      fetchAuthor()
    }
  }, [isVisible])

  const handleCancel = () => {
    onCancel()
    controller.abort()
  }

  return (
    <>
      <Modal
        title='Requesting the quote'
        open={isVisible}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Cancel
          </Button>
        ]}
      >
        <p>Step 1: {loadingUserDetails ? 'Requesting author...' : author.name}</p>
        <p>Step 2: {loadingQuote ? 'Requesting quote...' : quote.quote}</p>
      </Modal>
    </>
  )
}

export default Quotes
