import React from 'react'

const Card = ({ user }) => {
    return (
        <div className="card">
            <p>
                <img src={user.avatar} alt="" />
                <p>{user.first_name}  {user.last_name}</p>
                <p>{user.email}</p>
            </p>
        </div>
    )
}

export default function Dashboard({ users, loading }) {

    return (
        <div className="container">
            {loading &&
                <div className="loader">
                    <div className="loader_bar"></div>
                </div>
            }
            <div className="card_container">
                {users.map((user) => (<Card key={user.id} user={user} />))}
                {users.length === 0 && <h1>Please fetch users ....</h1>}
            </div>
        </div>
    )

}
