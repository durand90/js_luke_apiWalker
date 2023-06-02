import React from 'react';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router';



import axios from 'axios';

const People = (props) => {



    const [user, setUser] = useState({});
    const { id } = useParams();

    //const { string } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {a
                console.log(response.data)
                setUser(response.data)
                setError(false)
            })
            .catch(response => {
                console.log("^^^^^^^^^^^^^")
                console.log(response)
                setError(true)
            })
        //console.log(num)
        //console.log()
    }, [id])

    if (error === false) {


        return (
            <div style={(StyleSheet.author, { width: "100%", height: "600px", textAlign: "center", backgroundImage: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a364ee04-6380-4393-a551-2199250f57bf/ddm3yde-6ad2903a-603e-4356-a461-70b53ead7074.png/v1/fill/w_1280,h_720,q_80,strp/star_wars___the_dark_side_wallpaper_by_daviddv1202_ddm3yde-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYTM2NGVlMDQtNjM4MC00MzkzLWE1NTEtMjE5OTI1MGY1N2JmXC9kZG0zeWRlLTZhZDI5MDNhLTYwM2UtNDM1Ni1hNDYxLTcwYjUzZWFkNzA3NC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.XLm8O6IJQKIRJL_CEjoE0p8zqarKYnca1KluixiJlBU)',
                                                backgroundSize: '100%'})}>
                <h1 style={{ color: 'red'}}>FOOL, you don't know the POWER of the dark side!</h1>
                {<h1 style={{ color: 'white'}}>Character: {user.name}</h1>}
                {<p style={{ color: 'white'}}><strong>Height: {user.height}</strong></p>}
                {<p style={{ color: 'white'}}><strong>Mass: {user.mass}</strong></p>}
                {<p style={{ color: 'white'}}><strong>Hair Color: {user.hair_color}</strong></p>}
                {<p style={{ color: 'white'}}><strong>Skin Color: {user.skin_color}</strong></p>}
                {/* {JSON.stringify(props.space)} */}
                {console.log(id)}
            </div>
        );
    }
    else {
        return (
        <div style={(StyleSheet.author, { textAlign: "center" })}>
            <h1>These aren't the droids you are looking for.</h1>
            <img alt='star wars pic' src='https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png'/>
        </div>
        );
    }

}

export default People;