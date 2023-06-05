import React from 'react'

function MenuItem({ image, nome, preco }) {
    return (
        <div className='menuItem'>
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {nome} </h1>
            <p> R${preco}</p>
        </div>
    )
}

export default MenuItem
