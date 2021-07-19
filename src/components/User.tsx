import React from 'react';
import './User.css';

export interface UserInt {
    name: string
    job: string
    age?: number
    deleteUser: () => void 
  }

const User: React.FC<UserInt> = ({name, age, job, deleteUser}) => {
    return (
        <div className="card">
            <div className="row">
                <h2>Name: </h2>
                <p>{name}</p>
                <hr />
            </div>
            <div className="row">
                <h2>Job: </h2>
                <p>{job}</p>
                <hr />
            </div>
            <div className="row">
                <h2>Age: </h2>
                <p>{age}</p>
            </div>
            <button className="deleteBtn" onClick={deleteUser}>Delete User</button>
        </div>
    );
};

export default User;