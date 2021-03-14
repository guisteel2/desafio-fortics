import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/@fortawesome/fontawesome-free/js/all.js';
import '../template/custom.css'
import Routes from './routes'

import React , { Component } from 'react'
import Header from '../template/pageHeader'
import Chat from '../template/chat/chat'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// const login = props => {
//     console.log('----?----');
//     console.log(props);
//     return (
//     )
// }

class App extends Component {

    constructor(state) {
        super();
        
      };
      

    check(){
        var visivel  = $('.fixed-bottom').css("display");
        alert(this);
        if(visivel == "none"){
            $('.fixed-bottom').show();
            $('.open').hide()
        }else{
            $('.fixed-bottom').hide();
            $('.open').show();
        }
        
        if(this.state.description == "Deslogado"){
            alert('Deslogado')
        }else{
            alert('Logado')
        }

    }

    validUser(){
        console.log('-------------------kkkkkkkkkkkkk');
        if(this.state.description == "Deslogado"){
            this.setState({...this.state, description: "Logado"})
        }else{
            this.setState({...this.state, description: "Deslogado"})
        }
    }

    addNome(e){
        this.setState({...this.state, nome: e.target.value})
    }

    addEmail(e){
        this.setState({...this.state, email: e.target.value})
    }

   
    render(){
        return (
                <div className='contender'>
                    <Header />
                    <Routes />
                    <Chat   check={this.check} validUser={this.validUser}/>
                </div>
        )
    }

}

const mapStateToProps = state =>({list: state.todo.list})
const mapDispatchToProps = dispatch => 
    bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)