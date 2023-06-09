import React, { Component } from 'react'
import data from '../assets/data.json'

class ComerSaludable extends Component {
    
    render() {
        
        const datos=data.map((data,i)=>{
                return (
                    <div key={i}>
                        ComerSaludable
                    </div>
                )
        });
        return (<div>{datos}</div>)
     
    }
}
export default ComerSaludable;