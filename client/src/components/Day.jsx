// want to see / edit / update / delete symptoms!

import React from "react";
import { useState } from "react";


const Day = () => {

    // set state for symptoms selected—at first would be none, 
    const [userSymptoms, setUserSymptoms] = useState([]);
    // List out possible symptoms, eventually as icon buttons. Then onChange() we map() through the selected symptoms to create a new array and save it to the day
    const possibleSymptoms = ["sneezing and coughing", "runny or blocked nose", "itchy, red or watery eyes", "itchy throat, mouth, nose, ears", "loss of smell", "pain around temple or forehead", "headache", "earache", "tiredness"]

    // then if the day has +1 in [] array, it gets coded a colour on the calendar

    

    return (
        <li>
            <button>{possibleSymptoms}</button>
        </li>
        
    )
}

export default Day;