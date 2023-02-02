import React from 'react'

export default function Buttons({ getQuote }) {
    return (
        <div className='btn-container'>
            {/* <button onClick={() => saveQuote()}>Save Quote</button> */}
            <button onClick={() => getQuote()}>Give Me Another Quote</button>
        </div>
    )
}
