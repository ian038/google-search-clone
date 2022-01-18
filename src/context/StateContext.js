import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'

const StateContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const StateProvider = ({ children }) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const getResults = async(url) => {
        setLoading(true)
        const options = {
            method: 'GET',
            url: `${baseUrl}${url}`,
            headers: {
              'x-rapidapi-host': 'google-search3.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
        };
        const res = await axios.request(options)
        setResults(res.data)
        setLoading(false)
    }

    return (
        <StateContext.Provider value={{ results, loading, searchTerm, setSearchTerm, getResults }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)