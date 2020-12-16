import React from 'react';
import './App.css'
import 'animate.css'


function Props(props) {
    return (
        <div className='animate__heartBeat' >
        <h1 className='head1'>Hi! I am a Front nd {props.profession} <br />and right now I am learning {props.courseName} </h1>
        </div>
    )
}

export default Props;