import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const UpdatePet = () =>{

    const params = useParams();
    //const [result, setResult] = useState([]);
    const [data, setData] = useState({})
    //const [name, setName] = useState("");
    //const [nameError, setNameError] = useState("");

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/details/${params.id}/`)
             
             .then( response => setData(response.data.result) )
            
             .catch( err => console.log(err));
    },[params.id])

   /*
   const handleError = (e) =>{
    if(e.target.name==='name') {
        setName(e.target.value);
        if(e.target.value.length < 1 ){
            setNameError("Name is required!");
        }else if(e.target.value.length < 3){
            setNameError("Name must be 3 characters or longer!");
        }
        else {
            setNameError('');
        }
    }
   }*/
   
    const handleChange = (event) => {
        //console.log(data);
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
                            value={data.name} 
                            onChange={(handleChange)} 
                        />
                        
                    </div>
                    <div>
                        <span>Type:</span>
                        <input
                            className="ml-2" 
                            type="text" 
                            name="type" 
                            value={data.type} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <span>Description:</span>
                        <input
                            className="ml-2" 
                            type="text" 
                            name="description" 
                            value={data.description} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <span>Skill 1:</span>
                        <input
                            className="ml-2" 
                            type="text" 
                            name="skill1" 
                            value={data.skill1} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <span>Skill 2:</span>
                        <input
                            className="ml-2" 
                            type="text" 
                            name="skill2" 
                            value={data.skill2} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <span>Skill 3:</span>
                        <input
                            className="ml-2" 
                            type="text" 
                            name="skill3" 
                            value={data.skill3} 
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