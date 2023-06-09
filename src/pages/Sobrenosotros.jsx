import React, { Component } from 'react'
import data from '../assets/data.json'

class Sobrenosotros extends Component {
    
    render() {
        
        const datos=data.map((data,i)=>{
                return (
                    <div key={i}>
                        Sobrenosotros
                    </div>
                )
        });
        return (<div>{datos}</div>)
     
    }
}
export default Sobrenosotros;