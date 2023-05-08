// import React from 'react';
// import { useEffect, useState} from 'react';

// import { useParams } from 'react-router';

// import axios from 'axios';

// const Fetch = (props) => {
    


//     const [users, setUsers] = useState([])

//     //const { string } = useParams();

//     useEffect(() => {
//         axios.get('https://swapi.dev/api/planets/')
//         .then(response => {setUsers(response.data.results)})
//         //console.log(users)
//         //console.log()
//     }, [])


//     return (
//         <div>
//             {users.map((user, index) => {
//                 return <li key={index}>{user.name}</li>
//             })}
//             {JSON.stringify(props.space)}
//             <h1>hello</h1>

//         </div>
//     );
// }

// export default Fetch;