import React, { useState,useEffect } from 'react';
import requests from '../../utils/request'
import axios from '../../utils/axios'
const Banner = () => {
    const [movie, setMovie] = useState([])
    useEffect(()=>{
        (async ()=>{
            try{
                const request=await axios.get(requests.fetchNetflixOriginals)
                console.log(request)
                setMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results)
                ])
            }
            catch(error){
                console.log(error)
            }
        })()
    },[])
    return (
        <div>
            hello
        </div>
    )
}

export default Banner
