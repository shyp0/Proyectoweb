import React, { Component } from 'react'
import data from '../assets/data.json'

class PublicarReceta extends Component {
    
    render() {
        
        const datos=data.map((data,i)=>{
                return (
                    <div key={i}>
                        PublicarReceta
                    </div>
                )
        });
        return (<div>{datos}</div>)
     
    }
}
export default PublicarReceta;