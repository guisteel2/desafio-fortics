import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/@fortawesome/fontawesome-free/js/all.js';
import '../template/custom.css'
import Routes from './routes'

import React , { Component } from 'react'
import Header from '../template/pageHeader'
import Chat from '../template/chat/chat'




export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {  description: 'Deslogado',
                        nome: '',
                        email:'',
                        list:[]}

        this.validUser = this.validUser.bind(this);
        this.addNome = this.addNome.bind(this);
        this.addEmail = this.addEmail.bind(this);
    }

    check(){
        var visivel  = $('.fixed-bottom').css("display");
        if(visivel == "none"){
            $('.fixed-bottom').show();
            $('.open').hide()
        }else{
            $('.fixed-bottom').hide();
            $('.open').show();
        }
    }

    validUser(){
        console.log(this.state);
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
                    <Chat   check={this.check} 
                            user={this.state.description} 
                            validUser={this.validUser}
                            addNome={this.addNome} 
                            addEmail={this.addEmail}
                    />
                </div>
        )
    }

}
