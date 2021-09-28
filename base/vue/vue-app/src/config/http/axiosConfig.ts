import axios from "axios";


const http = axios.create({
	baseURL: 'https://www.fastmock.site/mock/23058e56360d378cb556b71a016e8a5f/api'
})

export default http