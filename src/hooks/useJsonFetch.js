import { useEffect } from "react";
import { useState } from "react";


export default function useJsonFetch(url, initData) {
    const [data, setData] = useState(initData)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            try{
                const resp = await fetch(url)
                if(!resp.ok){ throw new Error(resp.statusText)}
                const dataResp = await resp.json()
                setData(dataResp)
            } catch(err) { 
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
        
    }, [])

    return {data,loading, error }




}