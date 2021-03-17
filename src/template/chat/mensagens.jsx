import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { validUser, chatHist, searchChat } from '../../Actions/Actions'

import ChatAssistant from './chatAssistant'
import ChatUser from './chatUser'

const mensagens = props => {
    // props.searchChat();
     
    const renderRows = () => {
        let aux = 0;
        let divs = '';
        
        for(let i=0; i<Object.keys(props.chat).length; i++){
            
            //Resposta/Chamada do usuario
            if(props.chat[i]['you'] == '1'){
                divs = [divs,<ChatUser key= {aux} compUser = '1'/>];
                aux +=1;  
            }else if(props.chat[i]['you'] == '2'){
                divs = [divs,<ChatUser key= {aux} compUser = '2'/>];
                aux +=1;  
            }else if(props.chat[i]['you'] == '3'){
                divs = [divs,<ChatUser key= {aux} compUser = '3'/>];
                aux +=1;  
            }else if(props.chat[i]['you'] == '4'){
                divs = [divs,<ChatUser key= {aux} compUser = '4'/>];
                aux +=1;  
            }else if(props.chat[i]['you'] == 'Outro tipo de msg"vindo no input", esperando funcionado para atender'){
                divs = [divs,<ChatUser key= {aux} compUser = ''/>];
                aux +=1;  
            }
            
            //Resposta/chamadas do chat
            if(props.chat[i]['resp'] == 1 || props.chat[i]['resp'] == "helps"){
                divs = [divs,<ChatAssistant validUser={props.validUser} chatHist={props.chatHist} key= {aux} compAssistant = '1' />];  
                aux +=1;
            }else if(props.chat[i]['resp'] == 2 ){
                divs = [divs,<ChatAssistant key= {aux} compAssistant = '2' />];  
                aux +=1;
            }else if(props.chat[i]['resp'] == 2 ){
                divs = [divs,<ChatAssistant key= {aux} compAssistant = '2' />];  
                aux +=1;
            }else if(props.chat[i]['resp'] == 3 ){
                divs = [divs,<ChatAssistant key= {aux} compAssistant = '3' />];  
                aux +=1;
            }else if(props.chat[i]['resp'] == 4 ){
                divs = [divs,<ChatAssistant key= {aux} compAssistant = '4' />];  
                aux +=1;
            }else if(props.chat[i]['resp'] == 'aqui vai ficar quando o funcionario responde' ){
                divs = [divs,<ChatAssistant key= {aux} compAssistant = '' />];  
                aux +=1;
            }

        }

        return divs
        
    }

    return (<div>{renderRows()}</div>
)
}

const mapStateToProps = state =>({nome: state.todo.nome, email: state.todo.email, chat: state.todo.chat})
const mapDispatchtoProps = dispatch =>bindActionCreators({validUser, chatHist, searchChat}, dispatch)
export default connect(mapStateToProps, mapDispatchtoProps)(mensagens)
