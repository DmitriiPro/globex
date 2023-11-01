import axios from 'axios'
import { API_URI } from './api-uri'
import { Cards } from '../types/model'

export const Service = {
  async cardBySearchID(value: string): Promise<Cards> {
    const search = !!value ? `?term=${value}` : ''
    const res = await axios.get(`${API_URI}${search}`)
    return res.data
  },
}
