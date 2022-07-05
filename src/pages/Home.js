import React, { useState } from 'react'
import TextForm from '../components/TextForm';
import Alert from "../components/Alert";

const Home = ({ mode, showAlert, alert }) => {
    return (
        <>
            <Alert alert={alert} />
            <div className="container my-3">
                <TextForm heading="Text Utils- Word Counter, Character Counter " showAlert={showAlert} mode={mode} />
            </div>
        </>
    )
}

export default Home