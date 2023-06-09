import React, { Component } from 'react'
import data from '../assets/data.json'

class Registro extends Component {
    
    render() {
        
        const datos=data.map((data,i)=>{
                return (
                    <div key={i}>
                        Registro
                    </div>
                )
        });
        return (<div>{datos}</div>)
     
    }
}
export default Registro;