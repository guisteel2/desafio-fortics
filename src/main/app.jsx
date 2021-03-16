import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/@fortawesome/fontawesome-free/js/all.js';
import '../template/custom.css'
import Routes from './routes'

import React , { Component } from 'react'
import Header from '../template/pageHeader'
import Chat from '../template/chat/chat'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { searchChat } from '../Actions/Actions'

class App extends Component {
    
    render(){    
        return (
                <div className='contender'>
                    <Header />
                    <Routes />
                    <Chat />
                </div>
        )
    }

}

const mapStateToProps = state =>({list: state.todo.list})
const mapDispatchToProps = dispatch => 
    bindActionCreators({searchChat}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)