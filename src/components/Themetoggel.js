import React , {useContext} from "react";
import { ThemeContext } from "./context/ThemeContext";


const Themetoggle = () =>{
    const {toggleTheme} = useContext(ThemeContext);
    return <button onClick={toggleTheme}>Toggle The Theme</button>;
} 
export default Themetoggle;