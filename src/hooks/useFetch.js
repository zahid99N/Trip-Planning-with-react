import { useEffect, useState } from 'react'

export default function useFetch(url) {
 
    const [data, setData] = useState(null)
    const [isPanding, setIsPanding]= useState(false)
    const [error,setError] = useState(null)
    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            setIsPanding(true)
            try {
                const res = await fetch(url, {signal: controller.signal})
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const json = await res.json()
                setIsPanding(false)
                setData(json)
                setError(null)
            } catch (err) {
                console.log('THis',err)
                if (err.name === "AbortError") {
                    console.log('The fetch was aborted')
                } else {
                    setIsPanding(false)
                    setError('Could not fetch tha data')
                    console.log(err.message)
                }
                }
                
            
        }
        fetchData() 
        return () => {
            controller.abort()
        }
    }, [url])
    
    return{ data , isPanding, error}
  
}
 