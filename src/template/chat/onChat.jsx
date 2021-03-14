import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { validUser,valids, changeUsername, changeUseremail, addUser } from '../../Actions/Actions'

const onChat = props => {
   
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

              <div className="chat">

                <div className="chat-avatar">
                  <a className="avatar avatar-online" data-toggle="tooltip" data-placement="right" data-original-title="June Lane">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                    <i></i>
                  </a>
                </div>

                <div className="chat-body">
                  <div className="chat-content">
                    <p>Olá, sir.
                      <br/>Testando chat?
                    </p>
                    <time className="chat-time">11:37:08 am</time>
                  </div>
                </div>

              </div>
              
              <div className="chat chat-left">

                <div className="chat-avatar">
                  <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="Edward Fletcher">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" />
                    <i></i>
                  </a>
                </div>

                <div className="chat-body">
                  <div className="chat-content">
                    <p>chegando assim.</p>
                    <time className="chat-time">11:39:57 am</time>
                  </div>
                </div>

              </div>
              
            </div>

        </div>

        <div className="panel-footer">
            <form>
              <div className="input-group">
                <span className="input-group-btn">
                  <button className="btn faB" type="button"><i className="far fa-grin-beam" aria-hidden="true"></i></button>
                </span>

                <input type="text" className="form-control input" placeholder="Sem envio!" />

                <span className="input-group-btn">
                  <button className="btn faB" type="button"><i className="fas fa-paperclip" aria-hidden="true"></i></button>
                </span>
              </div>
            </form> 
          </div>
    </div>
    )
}

const mapStateToProps = state =>({nome: state.todo.nome, email: state.todo.email, errorNome: state.todo.errorNome })
const mapDispatchtoProps = dispatch =>bindActionCreators({valids, validUser, changeUsername, changeUseremail, addUser }, dispatch)
export default connect(mapStateToProps, mapDispatchtoProps)(onChat)

