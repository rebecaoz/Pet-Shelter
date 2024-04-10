import "./ListPets.style.css"
import React from 'react';
import {Link} from 'react-router-dom';

import { useNavigate} from "react-router-dom";


const ListPets = (props) => {


    const navigate = useNavigate();


    return <div>
        <div>
            <h2 className="text-center">These pets are looking for a good home</h2>
        </div>
        <div>
        <Link to="/new" className=""> Add a pet to the shelter</Link>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.pets.map((pet, index) => {
                        return <tr key={pet._id}>
                        
                        <td>
                            {pet.name} 
                        </td>
                        <td>
                            {pet.type}
                        </td>
                        <td>
                            <button onClick={()=>navigate("/details/"+pet._id)}>Details</button>
                        </td>
                        <td>
                        <button>Edit</button>
                        </td>
                    </tr>
                    }
                        
                    )}
                    
                </tbody>
            </table>
        </div>
    </div>
}

export default ListPets