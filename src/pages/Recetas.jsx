import React, { Component } from 'react'
import data from '../assets/data.json'

class Recetas extends Component {
    
    render() {
        
        const datos=data.map((data,i)=>{
                return (
                    <div key={i}>
                        Ver todas las recetas
                    </div>
                )
        });
        return (<div>{datos}</div>)
     
    }
}
export default Recetas;