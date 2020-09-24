import React from 'react'

const BoxInfo = ({message}) => {
    return(
        <div style={{backgroundColor: '#aaa', padding: '30px', position: 'absolute', top: '50%', left: '50%'}}>
            {message}
        </div>
    )
}

export default BoxInfo