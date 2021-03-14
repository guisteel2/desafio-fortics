import React from 'react'
import Validation from './validation'


export default props => {

  return (
    <div> 
      <div className="open" data-toggle="tooltip" data-placement="top" title="Abrir Chat">
        <span className="input-group-btn">
          <button className="btn check" onClick={props.check} >
            <i className="fas fa-stream" aria-hidden="true"></i>
          </button>
        </span>
      </div>

      <div className="fixed-bottom bootstrap snippets bootdeys">
          <div className="chatcorp col-md-7 col-xs-12 col-md-offset-2">
            <div className="chat painel" id="chat">
              <Validation user = {props.user} check={props.check} validUser={props.validUser} addNome={props.addNome} addEmail={props.addEmail} />
            </div>
          </div>
      </div>
    </div>
  )
  }