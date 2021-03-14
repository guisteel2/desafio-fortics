import React from 'react'
import OnChat from './onChat'
import Logar from './login'

export default props => {

    if(props.user == 'Logado' ){
        
        return (
                 <OnChat check={props.check} validUser={props.validUser} /> 
        )
    }else{
        return (
                <Logar check={props.check} validUser={props.validUser} addNome={props.addNome} addEmail={props.addEmail} />              
        )
    }
}