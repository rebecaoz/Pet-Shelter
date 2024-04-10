import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"



const Details = (props) =>{
    const params = useParams();
    console.log(params);
    
    const [result, setResult] = useState([]);
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/details/${params.id}/`)
             
             .then( response => setResult(response.data.result) )
             .catch( err => console.log(err));
    },[params.id])
    


    return (
        <div>
            <div>
                <h2>Details about: {result.name}</h2>
                <button>Adopt {result.name}</button>
            </div>
           
            <p>Pet type: {result.type}</p>
            <p>Pet Description: {result.description}</p>
            <p>Skills: {result.skill1}</p>
            <p>{result.skill2}</p>
            <p>{result.skill3}</p>
        </div>
    )
}
export default Details