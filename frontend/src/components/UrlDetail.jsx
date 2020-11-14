import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useParams } from "react-router-dom";

const UrlDetail = () => {
    let {id} = useParams();
    console.log('id individual', id);

    const [selectedUrl, setSelectedUrl] = useState([]);

    let lastChar = id.slice(-1);
    let status = false;
    let newToken = id.slice(0, -1);

    if (lastChar == '+') {
        console.log("detail");
        status = true;
        
        

    } else {
        console.log("no detail");
        status = false;
    }

    const getUrl = async (token) => {
        if (status) {
            const resultUrl = await axios(
                `http://localhost:4000/api/url/token/${token}`
            );
    
            setSelectedUrl(resultUrl.data);
            console.log("selected bbb", selectedUrl);
        }
        
    }

    const getPage = async (id) => {
        if (!status) {
            await axios(
                `http://localhost:4000/api/url/${id}`
            ).then((res) => {
                console.log('hola', res)
            })

        }
    }

    getPage(id);

    useEffect(() => {
        getUrl(newToken);
    }, [])

    return(
        <>
            {
                status == true
                ?
                <div>
                    <h1>Detail</h1>

                    <h5>Url original</h5>
                    <p>{selectedUrl.original}</p>

                    <h5>Url generada</h5>
                    <p>{selectedUrl.generated}</p>

                    <h5>Counter</h5>
                    <p>{selectedUrl.counter}</p>

                </div>
                :
                null
            }
            
        </>

    )

}

export default UrlDetail;