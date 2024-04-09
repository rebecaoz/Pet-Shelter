import "./MainPage.style.css"
import AddPet from "../../components/AddPet/AddPet.component"
import ListPets from "../../components/ListPets/ListPets.component";
import axios from "axios";
import { useEffect, useState } from "react";
//import HTTPClient from "../../utils/HTTPClient";

const MainPage = (props) => {

    const [pets, setPets] = useState([]);
   
    

    const getPets = () => {
        axios.get('http://localhost:8000/api/pets')
            .then((response) => {
                setPets(response.data.pets)
                
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    

    useEffect(()=>{
        getPets();
        
    },[])


    return <div className="content">
        <div>
            <ListPets pets={pets} />
        </div>
    </div>
}

export default MainPage;