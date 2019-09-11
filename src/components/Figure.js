import React from 'react'

const Figure = props => {
    console.log(props)
    return(
        <figure>
            <img src={props.src}></img>
            <h4>{props.heading}</h4>
            <p>{props.paragraph}</p>
            <a href="#">{props.link}</a>
        </figure>
    ) 
}
export default Figure