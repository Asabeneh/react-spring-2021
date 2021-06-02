import React, {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (url) => {
const [data, setData] = useState([])
const fetchData = async () => {
const response = await axios.get(url)
setData(response.data)
}

useEffect(() => {
    fetchData()
}, [url])

return data
}

export default useFetch