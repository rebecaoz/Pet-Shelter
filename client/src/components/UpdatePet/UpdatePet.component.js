import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const UpdatePet = () =>{

    const params = useParams();
    const [result, setResult] = useState([]);
    const [data, setData] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/details/${params.id}/`)
             
             .then( response => setResult(response.data.result) )
           
             .catch( err => console.log(err));
    },[params.id])

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        editPet(data)
        //console.log(data);
        setData({})
    }

    const editPet = (data) => {
        
        axios.put(`http://localhost:8000/api/update/${params.id}`,data)
            .then((response) => {
                //console.log(data)
                //console.log(response)
                //getPets();
                //setPets(response.data);  
            })
            .catch((error) => {
                console.log(error)
            },[params.id])
        
    }


    return(
        <div>
            <div>
                <h2 className="text-center">Know a pet needing a home</h2>
            </div>
            <div className="pd-5">
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <span>Nombre:</span>
                        <input
                            className="ml-2" 
                            type="text" 
                            name="name" 
                            value={result.name} 
                            onChange={(handleChange)} 
                            
                        />
                    </div>
                    <div>
                        <span>Type:</span>
                        <input
                            className="ml-2" 
                            type="text" 
                            name="type" 
                            value={result.type} 
                            //onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <span>Description:</span>
                        <input
                            className="ml-2" 
                            type="text" 
                            name="description" 
                            value={result.description} 
                            //onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <span>Skill 1:</span>
                        <input
                            className="ml-2" 
                            type="text" 
                            name="skill1" 
                            value={result.skill1} 
                            //onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <span>Skill 2:</span>
                        <input
                            className="ml-2" 
                            type="text" 
                            name="skill2" 
                            value={result.skill2} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <span>Skill 3:</span>
                        <input
                            className="ml-2" 
                            type="text" 
                            name="skill3" 
                            value={result.skill3} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <button type="submit">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UpdatePet