import React, { useState, useParams } from 'react';

import { useHistory } from 'react-router';

const Input = (props) => {


    const subjects = [
        "people",
        "planets",
        // "films",
        // "species",
        // "vehicles",
        // "starships"
    ]

    const [allSubjects, setAllSubjects] = useState(subjects[0]);
    const [id, setId] = useState(0)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted")
        history.push("/" + allSubjects + "/" + id)
    }


    return (
        <div className="fill-window"  style={(StyleSheet.author, { textAlign: "center", backgroundImage: 'url(https://i.pinimg.com/originals/5d/c2/7f/5dc27fba2d50fa85aef623d440356f04.jpg)' })}>
            <form onSubmit={handleSubmit}>
                {/* {JSON.stringify(subjects)}
                {JSON.stringify(id)} */}
                <h1 style={{ color: 'white'}}>STAR WARS API</h1>
                <div style={{ display: "inline", color: 'white' }}>
                    <div>
                    <h2 style={{ color: 'white'}}>Guess your favorite character/planet number: </h2>
                    <select value={allSubjects} onChange={e => setAllSubjects(e.target.value)}>
                        {subjects.map((subject, index) =>
                            <option key={index} value={subject}>{subject}</option>
                        )}
                    </select>
                    </div>
                    <input onChange={(e) => {setId(e.target.value)}}type="text" value={id}/>
                <div>
                    <button>Find</button>
                    {/* <h1>Serch</h1> */}
                </div>
                    <h1 style={{ color: 'blue'}}>May the force be with you, for now...</h1>
                    {console.log(subjects)}
                </div>
            </form>
        </div>
    );
}

export default Input;