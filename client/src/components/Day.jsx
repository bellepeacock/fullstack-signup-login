import React from "react";
// import { useState, useEffect } from "react";


export const Day = () => {

    // const [userSymptoms, setUserSymptoms] = useState([]);

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
    
    // const listSymptoms = possibleSymptoms.map((s) => 
    //     <div>
    //         <input type="checkbox" value={s.name} />
    //         <label>{s.name}</label>
    //     </div>
    // ); 

    // useEffect(() => {
    //     localStorage.setUserSymptoms('userSymptoms', JSON.stringify(userSymptoms));
    //   }, [userSymptoms]);

    // const userSymptoms = localStorage.getItem("userSymptoms");

    const userSymptoms = [];
    
    const addSymptom = () => {
        let newUserSymptoms = [...userSymptoms];

        newUserSymptoms.push(symptom);

        localStorage.setItem("userSymptoms", JSON.stringify(newUserSymptoms));
    };

    console.log(userSymptoms);

    // const listUserSymptoms = userSymptoms.map((s) => 
    //     <div>
    //         <input type="checkbox" value={s.name} />
    //         <label>{s.name}</label>
    //     </div>

    // );
    console.log(userSymptoms.length === 0 ? true : false );
    console.log(userSymptoms);

        // display one checkbox, see how that works [x]
        // then add the others with the loop [x]
        // make it into a form, with a submit button (add symptom) and call the function [ ]
        // want to save these userSymptoms in the db as on this day, this user had xyz [ ]
        // when the page loads, go to DB and see for this user, this day, what were the symptoms? [ ]
                // Can always see the entire list to add more, but can see which they've already selected: selected is true
                // can format the checkbox to be an image (later on!)

        // ^^define the behaviours of the pg really clearly to help code the pg!
        // draw on paper the final page will look like!! List out all the actions the user can take, e.g. click on this list, log in, —for each action, what is the behaviour you can do [x] 
            // add to the trello board
            // msg Lakshmi on Slack next wk with it done!! [x]

    return (
        <div>
            <form >
            {possibleSymptoms.map((s) => (
                <div >
                <label className="container" onClick={addSymptom()}>
                    <input type="checkbox" />
                    <textarea value={s.name} />
                    <img className="checkmark" alt="labrador0.1" src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg" /> 
                </label>

                <label className="container" value={s.name} onClick={addSymptom()}>
                    <input type="checkbox" />
                    <textarea value={s.name} />
                    <img className="checkmark" alt="labrador" src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg" /> 
                </label>

                <label className="container" value={s.name} onClick={addSymptom()}>
                    <input type="checkbox"  />
                    <textarea value={s.name} />
                    <img className="checkmark" alt="labrador1" src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg" /> 
                </label>

                <label className="container" value={s.name} onClick={addSymptom()}>
                    <input type="checkbox" />
                    <textarea value={s.name} />
                    <img className="checkmark" alt="labrador2" src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg" />   
                </label>
                </div>
            ))}
            </form>
        </div>
)
};


export default Day;
