import React, { useState, useEffect } from 'react';
import './App.css';


function Songs(){
    const [message, setMessage] = useState([])

    useEffect(()=>{
            fetch('http://ec2-63-35-229-27.eu-west-1.compute.amazonaws.com:8080/contents').then(res=>{
            return res.json()}).then(data=>{
            const newData = Object.values(data)
            setMessage(newData)

        })
            }, [])

return (
<main>
        {message.map(e=>(
            <>
                <ul>
                <li>{e.Title}</li>
                <li>{e.Artist}</li>
                <li>{e.Feat}</li>
                <li>{e.Genre}</li>
                <li>{e.Duration}</li>
                </ul>
            </>
            )
            )}
        </main>
        );
}

export default Songs;