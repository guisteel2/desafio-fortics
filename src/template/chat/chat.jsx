import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Validation from './validation'
import { valids } from '../../Actions/Actions'

const chat = props => {
    
    return (
          <div> 
            <div className="open" data-toggle="tooltip" data-placement="top" title="Abrir Chat">
              <span className="input-group-btn">
                <button className="btn check" onClick={props.valids} >
                  <i className="fas fa-stream" aria-hidden="true"></i>
                </button>
              </span>
            </div>

            <div className="fixed-bottom bootstrap snippets bootdeys">
                <div className="chatcorp col-md-7 col-xs-12 col-md-offset-2">
                  <div className="chat painel" id="chat">
                    <Validation />
                    {/* <Validation user = {props.user} check={props.check} validUser={props.validUser} addNome={props.addNome} addEmail={props.addEmail} /> */}
                  </div>
                </div>
            </div>
        </div>
        )
}

const mapStateToProps = state =>({user: state.todo.nome, email: state.todo.email, errorNome: state.todo.errorNome })
const mapDispatchtoProps = dispatch =>bindActionCreators({valids}, dispatch)
export default connect(mapStateToProps, mapDispatchtoProps)(chat)
