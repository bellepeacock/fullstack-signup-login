// want to see / edit / update / delete symptoms!

import React from "react";


const Day = () => {

    // List out possible symptoms, eventually as icon buttons. Then onChange() we map() through the selected symptoms to create a new array and save it to the day
    const possibleSymptoms = ["sneezing and coughing", "runny or blocked nose", "itchy, red or watery eyes", "itchy throat, mouth, nose, ears", "loss of smell", "pain around temple or forehead", "headache", "earache", "tiredness"]

    const addSymptoms = () => {
        const userSymptoms = window.localStorage("userSymptoms");

        let newUserSymptoms = [...userSymptoms];

        newUserSymptoms.push(possibleSymptoms);

        localStorage.setItem("userSymptoms", newUserSymptoms);
    };



    // then if the day has +1 in [] array, it gets coded a colour on the calendar
    

    return (
        <ul>
            <li>
                {possibleSymptoms}
                <button onClick={addSymptoms}>Add symptom</button>
            </li>
        </ul>
        
    )
}

export default Day;