import React from "react";
import { useState } from "react";


export const Day = () => {

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

        // let symptom = possibleSymptoms[0];

        const [userSymptoms, setUserSymptoms] = useState(
          new Array(possibleSymptoms.length).fill(false)
        );
        // const [checkedState, setCheckedState] = useState(
        //     new Array(possibleSymptoms.length).fill(false)
        //   );

          const handleOnChange = (position) => {
            const updatedUserSymptoms= possibleSymptoms.map((item, index) =>
              index === position ? !item : item
            );

            setUserSymptoms(updatedUserSymptoms);
          localStorage.setItem("userSymptoms", JSON.stringify(updatedUserSymptoms));

          }

    // const addSymptom = () => {
    //     let newUserSymptoms = [...userSymptoms];

    //     newUserSymptoms.push(symptom);

    //     //change to a remote DB after local storage working!
    //     localStorage.setItem("userSymptoms", JSON.stringify(newUserSymptoms));
    // };
    console.log(userSymptoms);

    // const handleSymptomChange = (e) => {
    //     let newUserSymptoms = [...userSymptoms];
    //     console.log("handleSymptomChange:");
    //     console.log(newUserSymptoms);
    //     console.log(e.target.value);
    //     // newUserSymptoms.push(e.target.value);

    //     // this.setState({userSymptoms: newUserSymptoms});
      
    //  };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.symptoms.value);
        // addSymptom(setUserSymptoms);
        console.log(userSymptoms)
    };

    console.log(userSymptoms.length === 0 ? true : false );
    console.log(userSymptoms);


     return ( 
    //   <div className="App">
    //   <h3>Select Toppings</h3>
    //   <ul className="symptoms-list">
    //     {possibleSymptoms.map(({ name }, index) => {
    //       return (
    //         <li key={index}>
    //           <div className="symptoms-list-item">
    //             <div className="left-section">
    //               <input
    //                 type="checkbox"
    //                 id={`custom-checkbox-${index}`}
    //                 name={possibleSymptoms.name}
    //                 value={possibleSymptoms.name}
    //                 checked={checkedState[index]}
    //                 onChange={() => handleOnChange(index)}
    //               />
    //               <label htmlFor={`custom-checkbox-${index}`}>{possibleSymptoms.name}</label>
    //             </div>
    //           </div>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>

        <div>
            <form onSubmit={handleSubmit} >
            {possibleSymptoms.map((s) => (
                <ul>
                    <li key={s}>
                        <label className="container" onClick={setUserSymptoms}>
                            <input type="checkbox" name="symptoms" checked={userSymptoms[userSymptoms.index]} onChange={() => handleOnChange(userSymptoms.index)} />
                            <textarea value={s.name} />
                            {/* <img className="checkmark" alt="labrador0.1" src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg" />  */}
                        </label>
                    </li>
                </ul>
            ))}
             <button>Submit</button>
            </form>
        </div>
)
};

export default Day;
