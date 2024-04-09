import "./AddPet.style.css"
import { useState } from "react"
import axios from "axios"



const AddPet = (props) => {
    const [data, setData] = useState({})
    

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const createPet = (data) => {
        
        axios.post('http://localhost:8000/api/pets/new',data )
            .then((response) => {
                //console.log(data)
                //console.log(response.data)
                //getPets();
                //setPets(response.data);  
            })
            .catch((error) => {
                console.log(error)
            })
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createPet(data)
        //console.log(data);
        setData({})
    }


    return <div>
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
                        onChange={handleChange} 
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
}

export default AddPet