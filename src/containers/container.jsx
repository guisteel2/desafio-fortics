import React from 'react'
import { connect } from 'react-redux'

const usuarios = props => {

    const ListaUsuario = () =>{
        const list = props.list || []
        return list.map(todo =>(
            <tr key={todo._id}>
                <th scope="row">{todo._id}</th>
                <td>{todo.nome}</td>
                <td>{todo.email}</td>
                <td>{todo.chat}</td>
            </tr>
            )
        )
    }

    return (
        <div className="gridForm">
           <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Chat</th>
                </tr>
            </thead>
                <tbody>
                {ListaUsuario()}
            </tbody>
           </table>
        </div>
    )
}

const mapStateToProps = state =>({list: state.todo.list})
export default connect(mapStateToProps)(usuarios)
