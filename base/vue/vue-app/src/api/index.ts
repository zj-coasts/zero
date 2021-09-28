import http from '../config/http/axiosConfig'
import { useRequest } from 'vue-request'

export const getUser = (data: any, options: any) => useRequest(() => http.get('/api'), options)
