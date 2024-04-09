
import { InputLabel,TextField,FormControl,Select,MenuItem } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Form1=()=>{
    const navigate=useNavigate()
    const [data,setData]=useState({name:""})

    const navigateToForm2=(e)=>{
  e.target.value==="Yes"? navigate("/form2"):""
    }
const onChange=(e,key)=>{
    setData({...data,[key]:e.target.value})
}

    return(
        <div>
            {useEffect(()=>{
return(
    <div>
        <InputLabel  >Name</InputLabel>
        <TextField fullWidth onChange={(e)=>onChange(e,"name")} value={data.name} />
    </div>
)

            })}
            
            <InputLabel  >Name</InputLabel>
        <TextField fullWidth onChange={(e)=>onChange(e,"name")} value={data.name} />
        <InputLabel >Age</InputLabel>
        <TextField
          fullWidth
          type="number"
          
        />
        <InputLabel >Address</InputLabel>
        <TextField fullWidth />
        <InputLabel >Email Id</InputLabel>
        <TextField fullWidth type="email" />
        <FormControl fullWidth 
            >
          <InputLabel >
           Do you want to buy a car?
          </InputLabel>
          <Select onChange={navigateToForm2}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            
           
          >
            <MenuItem  value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
        
        </div>
    )
}

export default Form1