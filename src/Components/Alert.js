import React from 'react'

export default function Alert(props) {
    const Capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }
    return (
       
           props.alertMsg && <div className={`alert alert-${props.alertMsg.type} alert-dismissible fade show`} role="alert">
                <strong>{Capitalize(props.alertMsg.type)}</strong>:{props.alertMsg.msg}
                
            </div>
       
    )
}
