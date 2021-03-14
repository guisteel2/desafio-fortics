import React from 'react'

import { connect } from 'react-redux'

const login = props => {

    return (
        <div>
            <div className="panel-body">
            <div data-toggle="tooltip" data-placement="top" title="Fechar"><a onClick={props.check} ><input className="close fas fa-times"></input></a></div>
                <div className="chats">
                  <div className="login">         
                    <div>
                        <img src="https://www.fortics.com.br/wordpress/wp-content/uploads/2021/02/Asset-1.png" />
                        <h1>Precisamos de algumas informaçoes antes de inicar o atendimento</h1> 
                    </div>
                    
                    <div>
                        <form className="form-signin">
            
                            <label className="sr-only">Endereço de email</label>
                            <input value={props.email} onChange= { props.addEmail } type="email" id="inputEmail" className="form-control" placeholder="Endereço de email" />
                            <label className="sr-only">Nome</label>
                            <input value={props.nome}  onChange= { props.addNome } type="nome" id="inputName" className="form-control" placeholder="Nome"  />

                            <a className="btn btn-primary" type="submit" onClick={ props.validUser }>Iniciar</a>
                            <p className="mt-5 mb-3 text-muted">© 2021-2021</p>

                        </form>
                    </div>
                    
                  </div>
                </div>
            </div>
        </div>
        )
}

const mapStateToProps = state =>({nome: state.todo.nome, email: state.todo.email})
export default connect(mapStateToProps)(login)
