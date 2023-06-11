import axios from 'axios'
import { errorToast, successToast } from './toasts'
interface Props {
  loading?: boolean
  setLoading?: Function
  afterRequest?: Function
  afterFail?: Function
  successMessage?: string
  errorMessage?: string
  endpoint?: string
  method?: string
  data?: any
  toast?: any
  token?: any
}

export const apiRequest = async ({
  loading = false,
  setLoading = () => void (0),
  afterRequest = () => void (0),
  afterFail = () => void (0),
  successMessage,
  errorMessage,
  endpoint = '/',
  data = {},
  method = 'GET',
  toast = null,
  token = null,
}: Props) => {
  if (loading) {
    return
  }
  setLoading(true)
  try {
    const response = await axios({
      method,
      url: process.env.NEXT_PUBLIC_API + endpoint,
      data,
      headers: token ? {
        'Authorization': `Bearer ${token}`
      } : undefined
    })
    afterRequest(response.data)
    setLoading(false)
    if (toast && successMessage) {
      successToast(toast, successMessage)
    }
  } catch (error) {
    setLoading(false)
    afterFail()
    if (toast && errorMessage) {
      errorToast(toast, errorMessage)
    }
  }
}