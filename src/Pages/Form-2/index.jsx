import { useNavigate } from "react-router-dom"


const Form2=()=>{
    const navigate=useNavigate()

    const toform1=()=>{
        navigate("/form1")
    }


    return(
        <div>
        
        <h1 onClick={toform1}>form1</h1>
        </div>
    )
}

export default Form2