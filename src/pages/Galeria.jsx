import React, { Component } from 'react'
import data from '../assets/data.json'

class Galeria extends Component {
    
    render() {
        
        const datos=data.map((data,i)=>{
                return (
                    <ul key={i}>
                        <li> Edad:{data.id} </li>
                        <li> Nombre:{data.nombre} </li>
                    </ul>
                )
        });
        return (<div>{datos}</div>)
     
    }
}
export default Galeria;