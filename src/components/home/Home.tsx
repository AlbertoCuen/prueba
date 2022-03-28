import { useEffect, useState } from "react"
import { getUsers } from "../../helpers/getUsers"
import { UserCard } from "../users/UserCard"


export const Home = () => {

    const [ state, setState ] = useState();

    useEffect(() => {
        let resp:any;
        async function users() {
            resp = await getUsers()
            setState(resp);
            
        }
        users()
    }, []);
    
    console.log(state);

    return (
        <div>
            {JSON.stringify(state)}
            <UserCard name={'name'} email={'email@gmail.com'} />
        </div>
    )
}
