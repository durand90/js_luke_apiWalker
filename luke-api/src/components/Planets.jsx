import React from 'react';
import { useEffect, useState} from 'react';

import { useParams } from 'react-router';

import axios from 'axios';

const Planets = (props) => {
    


    const [users, setUsers] = useState([])
    const { id } = useParams();
    const [error, setError] = useState(false);

    //const { string } = useParams();

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/'+ id)
        .then(response => {
            setUsers(response.data)
            setError(false)
        })
        .catch(response => {
            console.log(response)
            console.log(users)
            console.log()
            setError(true)
        })
    }, [id])


    if ( error === false) {

        
        return (
            <div style={(StyleSheet.author, { height: "100%", textAlign: "center", backgroundImage: 'url(https://www.pixel4k.com/wp-content/uploads/2018/03/Star%20Wars%20Fiction%20Planet3652411811.jpg)' })}>
            <h1 style={{color: 'green'}}>Planets of the galaxy</h1>
        {<h1 style={{color: 'white'}}><strong>Planet {users.name}</strong></h1>}
        {<p style={{color: 'white'}}><strong>Climate: {users.climate}</strong></p>}
        {<p style={{color: 'white'}}><strong>Terrain: {users.terrain}</strong></p>}
        {<p style={{color: 'white'}}><strong>Surface Water: {users.surface_water}</strong></p>}
        {<p style={{color: 'white'}}><strong>Population: {users.population}</strong></p>}
            {/* {JSON.stringify(props.space)} */}

        </div>
    );
}   
else  {
    return(
        <div style={(StyleSheet.author, { textAlign: "center", })}>
        <h1>These are not the PLANETS you're looking for!!!!!</h1>
        <img alt='star wars pic' src="https://assets1.ignimgs.com/2017/07/06/darthmaul-1280-1499381595354_160w.jpg?width=1280"/>
        </div>
    );
}

}
export default Planets;