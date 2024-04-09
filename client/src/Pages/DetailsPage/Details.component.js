import { useParams } from "react-router-dom";

const Details = (props) =>{
    const params = useParams();

    const [result, setResult] = useState([]);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${params.id}/`)
             
             .then( response => setResult(response.data) )
             .catch( err => console.log(err));
    },[params.id])


    return 
}