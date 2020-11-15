import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const Url = () => {

    const [newUrl, setNewUrl] = useState({
        original: ""
    });

    const [currentUrl, setCurrentUrl] = useState([])

    const handleChange = (event) => {
        setNewUrl({ ...newUrl, [event.target.name]: event.target.value });
        console.log("handle change", newUrl);
    };

    const saveUrl = () => {
        axios.post('http://localhost:4000/api/url/', newUrl)
            .then((res) => {
                console.log('url: ', res.data);
                let completeUrl = 'http://localhost:3000/' + res.data;
                setCurrentUrl(completeUrl);
                console.log("url", currentUrl);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        saveUrl();
    }

    return(
        <>
            <h1>URL</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        class="form-control mt-3" 
                        placeholder="link"
                        name="original"
                        onChange={handleChange}></input>
                </div>
                
                <button type="submit" class="btn btn-primary mt-3">Generar</button>
            </form>           
            <p>
                {currentUrl}
            </p>
        </>

    )

}

export default Url;