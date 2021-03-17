import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {chatHist, inputB, validUser,valids, changeUsername, changeUseremail, addUser } from '../../Actions/Actions'

import Mensagens from './mensagens'


const onChat = props => {

  // props.searchChat();
  
  return (
    <div className="Mgs">
        <div className="panel-heading">
            <div>
                <img src="https://yt3.ggpht.com/ytc/AAUvwnj113LDVrY8FF0ulblIPF4cgFF4F2r3SNoTFE6Q=s900-c-k-c0x00ffffff-no-rj" />
                <i className="online far fa-circle"></i>
            </div>
            <div  className="center">
                <h1>Fortics</h1>
                <h1 className="panel-title">Como posso ajudar?</h1>
            </div>
            <div data-toggle="tooltip" data-placement="top" title="Sair do Chat"><a onClick={props.validUser}><input className="return fas fa-comment-slash"></input></a></div>
            <div data-toggle="tooltip" data-placement="top" title="Fechar"><a onClick={props.valids}><input className="close fas fa-times"></input></a></div>
        </div>

        <div className="panel-body">

            <div className="chats">
                <Mensagens />      
            </div>

        </div>

        <div className="panel-footer">
            <form>
              <div className="input-group">
                <span className="input-group-btn">
                  <button className="btn faB" type="button"><i className="far fa-grin-beam" aria-hidden="true"></i></button>
                </span>

                <input type="text" className="form-control input" value={props.input} onChange={props.inputB} />

                <span className="input-group-btn">
                  <button className="btn faB btn-primary" value="4" onClick={props.chatHist} type="button"><i className="fas fa-upload" aria-hidden="true"></i></button>
                </span>
              </div>
            </form> 
          </div>
    </div>
    )
}

const mapStateToProps = state =>({nome: state.todo.nome, email: state.todo.email, chat:state.todo.chat, input: state.todo.inputMeg})
const mapDispatchtoProps = dispatch =>bindActionCreators({chatHist, inputB, valids, validUser, changeUsername, changeUseremail, addUser }, dispatch)
export default connect(mapStateToProps, mapDispatchtoProps)(onChat)

