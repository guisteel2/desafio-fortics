import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import OnChat from './onChat'
import Logar from './login'


const validation = props => {

    if(props.user == 'Logado' ){
        return (
                 <OnChat /> 
        )
    }else{
        return (
                <Logar />              
        )
    }
}

const mapStateToProps = state =>({user: state.todo.description})
const mapDispatchtoProps = dispatch =>bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchtoProps)(validation)