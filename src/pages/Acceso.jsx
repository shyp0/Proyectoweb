import React, { Component } from 'react'
import data from '../assets/data.json'

class Acceso extends Component {
    
    render() {
        
        const datos=data.map((data,i)=>{
                return (
                    <div key={i}>
                        Acceso
                    </div>
                )
        });
        return (<div>{datos}</div>)
     
    }
}
export default Acceso;