import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";

const UpdatePet = () =>{

    const params = useParams();
    const [data, setData] = useState({})
    const [nameError, setNameError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [active, setActive] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/details/${params.id}/`)
             
             .then( response => setData(response.data.result) )
            
             .catch( err => console.log(err));
    },[params.id])

   
   const handleError = (e) =>{
    
        //setName(e.target.value);
        if(e.target.value.length < 1 ){
            if(e.target.name=='name'){
                setNameError("Name is required!");
            }else if(e.target.name=='type'){
                setTypeError("Type is required!")
            }else if(e.target.name=='description'){
                setDescriptionError("Description is required")
            }
            setActive(true);
        }else if(e.target.value.length < 3){
            if(e.target.name=='name'){
                setNameError("Name must be 3 characters or longer!");
            }else if(e.target.name=='type'){
                setTypeError("Type must be 3 characters or longer!")
            }else if(e.target.name=='description'){
                setDescriptionError("Description must be 3 characters or longer!")
            }
            setActive(true);
        }
        else {
            setNameError('');
            setTypeError('');
            setDescriptionError('');
            setActive(false);
        }
           
    }

   
   
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
        alert("Se guardó correctamente");
        navigate("/")
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

    const handleChangeAndError = (e) =>{
        handleChange(e);
        handleError(e);
    }

    const buttonIsActive = () =>{
        
        if(nameError || typeError || descriptionError){
            setActive(false);
        }else{
            setActive(true);
        }
       
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
                            onChange={handleChangeAndError} 
                        />
                        {
                            nameError ?
                            <p style={{color:'red'}}>{ nameError }</p> :
                            ''
                        }
                    </div>
                    <div>
                        <span>Type:</span>
                        <input
                            className="ml-2" 
                            type="text" 
                            name="type" 
                            value={data.type} 
                            onChange={handleChangeAndError} 
                        />
                        {
                            typeError ?
                            <p style={{color:'red'}}>{ typeError }</p> :
                            ''
                        }
                    </div>
                    <div>
                        <span>Description:</span>
                        <input
                            className="ml-2" 
                            type="text" 
                            name="description" 
                            value={data.description} 
                            onChange={handleChangeAndError} 
                        />
                        {
                            descriptionError ?
                            <p style={{color:'red'}}>{ descriptionError }</p> :
                            ''
                        }
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
                        
                        <button type="submit" disabled = {active}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UpdatePet