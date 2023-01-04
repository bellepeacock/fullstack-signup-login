// want to see / edit / update / delete symptoms!

import React from "react";


const Day = () => {

    const possibleSymptoms = [
        {
            name: "sneezing and coughing"
        },
        {
            name: "runny or blocked nose"
        },
        {
            name: "itchy, red or watery eyes"
        },
        {
            name: "itchy throat, mouth, nose, ears"
        },
        {
            name: "loss of smell"
        }, 
        {
            name: "pain around temple or forehead"
        },
        {
            name: "headache"
        },
        {
            name: "earache"
        }, 
        {
            name: "tiredness"
        }];

    let symptom = possibleSymptoms[0];
    
    const listSymptoms = possibleSymptoms.map((symptom) => 
        <li key={symptom.id}>
            {symptom.name}
        </li>
    ); 


    const addSymptoms = () => {
        const userSymptoms = window.localStorage("userSymptoms");

        let newUserSymptoms = [...userSymptoms];

        newUserSymptoms.push(symptom);

        localStorage.setItem("userSymptoms", newUserSymptoms);
    };

    return (
        <ul>
            {listSymptoms}
                <li key={symptom.id}><button onClick={addSymptoms}>Add symptom</button></li>
        </ul>
        
    )
}

export default Day;