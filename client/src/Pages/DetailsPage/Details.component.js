import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate} from "react-router-dom";
import LikeButton from "../../components/LikeButton/LikeButton.component";



const Details = (props) =>{
    const params = useParams();
    //console.log(params);
    
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    

    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/details/${params.id}/`)
             
             .then( response => setResult(response.data.result) )
             .then(setLoading(true))
             .catch( err => console.log(err));
    },[params.id])
    
    const remove = () =>{
        axios.delete(`http://localhost:8000/api/pets/delete/${params.id}/`)
        .then( response => setResult(response.data.result) )
        .then(alert("Congratulatios. You got a pet"))
        .then(navigate("/"))
        .catch( err => console.log(err));
    }

    
    

    return (
        <div>
            <div>
                <h2>Details about: {result.name}</h2>
                <button onClick={remove}>Adopt {result.name}</button>
            </div>
           
            <div>
                <p>Pet type: {result.type}</p>
                <p>Pet Description: {result.description}</p>
                <p>Skills: {result.skill1}</p>
                <p>{result.skill2}</p>
                <p>{result.skill3}</p>
            </div>
            {loading ? 
                <LikeButton></LikeButton>:
                <p>Loading...</p>}
             
            
            
            
        </div>
    )
}
export default Details