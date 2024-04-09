

import { useState } from "react";
import { Tabs, Tab, Box, TextField, InputLabel, Select, FormControl, MenuItem, Typography, Button } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const Form3 = () => {
    
    const [value, setValue] = useState('1');
    const [data, setData] = useState({});
    const [enable, setEnable] = useState(false);
    const [carData, setCarData] = useState({});
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleData = (event, key) => {
        setData({ ...data, [key]: event.target.value });
    };
    const handleOptions = (event) => {
        setEnable(event.target.value === "Yes");
    };
    const handleCarDetails = (e, key) => {
        setCarData({ ...carData, [key]: e.target.value });
    };

    const handleNext = () => {
        if (enable) {
            setValue('2');
        } else {
            setValue('3');
        }
    };

    const finalSubmit = () => {
        console.log(data, carData);
    };

    return (
        <div>
            <Box>
                <TabContext value={value}>
                    <Box>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="User Details" value="1" />
                            <Tab label="Car Details" value="2" disabled={!enable} />
                            <Tab label="Final" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <InputLabel>Name</InputLabel>
                        <TextField fullWidth onChange={(e) => handleData(e, "Name")} value={data.Name} />
                        <InputLabel>Age</InputLabel>
                        <TextField type="number" fullWidth onChange={(e) => handleData(e, "Age")} value={data.Age} />
                        <InputLabel>Address</InputLabel>
                        <TextField fullWidth onChange={(e) => handleData(e, "Address")} value={data.Address} />
                        <FormControl fullWidth style={{ marginTop: "35px" }}  >
                            <InputLabel id="demo-multiple-name-label">Do You Want To Buy a Car</InputLabel>
                            <Select onChange={handleOptions} value={enable ? "Yes" : "No"} >
                                <MenuItem value="Yes">Yes</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                            </Select>
                        </FormControl>
                        {value === '1' && (
                            <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
                        )}
                    </TabPanel>
                    <TabPanel value="2" >
                        <InputLabel>Car Name</InputLabel>
                        <TextField fullWidth onChange={(e) => handleCarDetails(e, "Name")} value={carData.Name} />
                        <InputLabel>Car Band</InputLabel>
                        <TextField fullWidth onChange={(e) => handleCarDetails(e, "Brand")} value={carData.Brand} />
                        <InputLabel>Car Model</InputLabel>
                        <TextField fullWidth onChange={(e) => handleCarDetails(e, "Model")} value={carData.Model} />
                    </TabPanel>
                    <TabPanel value="3">
                        <Typography variant="h4">Final Details</Typography>
                        <Typography>
                            <h3> User Data:  </h3>
                            <p> Name:{data.Name}</p>
                            <p>Age:{data.Age}</p>
                            <p>Address:{data.Address}</p>
                        </Typography>
                        <Typography><h3>Car Data:</h3></Typography>
                        <p> Name:{carData.Name}</p>
                        <p>Brand:{carData.Brand}</p>
                        <p>Model:{carData.Model}</p>
                        <Button variant="contained" color="primary" onClick={finalSubmit}>Submit</Button>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    )
}

export default Form3;
