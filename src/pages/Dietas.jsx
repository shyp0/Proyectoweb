import React, { Component } from 'react'
import data from '../assets/data.json'

class Dietas extends Component {
    
    render() {
        
        const datos=data.map((data,i)=>{
                return (
                    <div key={i}>
                        Dietas
                    </div>
                )
        });
        return (<div>{datos}</div>)
     
    }
}
export default Dietas;