import Form1 from "./Pages/Form-1";
import Form2 from "./Pages/Form-2";
import { Route,Routes } from "react-router-dom";
import Form3 from "./Pages/Form-3";


const App=()=>{



    return(
        <div>


            <Routes>
                <Route path="/form1"   element={<Form1/>}/>
                <Route path="/form2"   element={<Form2/>}/>
                <Route path="/form3"   element={<Form3/>}/>
            </Routes>
        </div>
    )
}

export default App

