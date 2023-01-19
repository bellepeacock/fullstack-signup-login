import React from "react";
import { useState, useEffect } from "react";


export const Day = () => {

    const [userSymptoms, setUserSymptoms] = useState([]);

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


    // const userSymptoms = [];
    
    const addSymptom = () => {
        let setUserSymptoms = [...userSymptoms];

        setUserSymptoms.push(symptom);

        localStorage.setItem("userSymptoms", JSON.stringify(setUserSymptoms));
    };
    console.log(userSymptoms);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userSymptoms)
    };

    console.log(userSymptoms.length === 0 ? true : false );
    console.log(userSymptoms);


    return ( 
        <div>
            <form onSubmit={handleSubmit} addSymptom={addSymptom}>
            {possibleSymptoms.map((s) => (
                <ul>
                    <li key={s}>
                        <label className="container" onClick={addSymptom()}>
                            <input type="checkbox" />
                            <textarea value={s.name} />
                            <img className="checkmark" alt="labrador0.1" src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg" /> 
                        </label>
                    </li>
                </ul>
            ))}
            </form>

        </div>
)
};


export default Day;
