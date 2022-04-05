import React, { useEffect, useState } from "react"
import { getUsers } from "../../helpers/getUsers"
import { UserCard } from "../users/UserCard"
import './Home.css';

export const Home = () => {

    const [state, setState] = useState([{
        id: 0,
        email: '',
        first_name: '',
        last_name: '',
        avatar: ''
    }]);


    useEffect(() => {
        async function users() {
            let resp: any = await getUsers()
            setState(resp.data);
        }
        users()
    }, []);

    console.log(state);


    return (
        <>
            <h2 className="title">Users List</h2>
            <div className="elements">
                {
                    state.map(user => (
                        <UserCard
                            key={user.id}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            email={user.email}
                            avatar={user.avatar}
                        />

                    ))
                }
            </div>

        </>
    )
}
