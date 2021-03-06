import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { valids, addUser, changeUsername, changeUseremail } from '../../Actions/Actions'

const login = props => {
   
    const ListaUsuario = (e) =>{
    
        props.addUser();

    }

    return (
        <div>
            <div className="panel-body">
            <div data-toggle="tooltip" data-placement="top" title="Fechar" onClick= { props.valids } ><a><input className="close fas fa-times"></input></a></div>
                <div className="chats">
                  <div className="login">         
                    <div>
                        <img src="https://www.fortics.com.br/wordpress/wp-content/uploads/2021/02/Asset-1.png" />
                        <h1>Precisamos de algumas informaçoes antes de iniciar o atendimento</h1> 
                    </div>
                    
                    <div>
                        <form className="form-signin" onSubmit={ListaUsuario}>
            
                            
                            <label className="sr-only">Endereço de email</label>
                            <input value={props.email} onChange= { props.changeUseremail } type="email" id="inputEmail" className="form-control" placeholder="Endereço de email" required/>
                            
                            <input value={props.nome}  onChange= { props.changeUsername } type="nome" id="inputName" className="form-control" placeholder="Digite um nome" required />
        
                            <button className="btn btn-primary" type="submit" >Iniciar</button>
    
                            <p className="mt-5 mb-3 text-muted">© 2021-2021</p>

                        </form>
                    </div>
                    
                  </div>
                </div>
            </div>
        </div>
        )
}

const mapStateToProps = state =>({nome: state.todo.nome, email: state.todo.email, errorNome: state.todo.errorNome })
const mapDispatchtoProps = dispatch =>bindActionCreators({valids, addUser, changeUsername, changeUseremail }, dispatch)
export default connect(mapStateToProps, mapDispatchtoProps)(login)
