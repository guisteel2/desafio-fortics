const INITIAL_STATE = { 
                        description: 'Deslogado',
                        nome: '',
                        email: '',
                        errorNome:'',
                        errorEmail:'',
                        list:   [{
                                    _id: 1,
                                    nome: 'Teste 1',
                                    email: 'gui.steel2@gmail.com',
                                    chat: 'Aberta',
                                    onChat: [
                                        {
                                            you: 1,
                                            resp: 1
                                         },
                                        {
                                            you: "Escreveu no input",
                                            resp: 4

                                        }],
                                    done:true
                                },
                                {
                                    _id: 2,
                                    nome: 'Teste 2',
                                    email: 'gui.steel2@gmail.com',
                                    chat: 'Fechado',
                                    onChat: [],
                                    done:true
                                },
                                {
                                    _id: 3,
                                    nome: 'Teste 3',
                                    email: 'gui.steel2@gmail.com',
                                    chat: 'Fechado',
                                    onChat: [],
                                    done:true
                                }] 
                        }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SEARCH':
            return { ...state }
        case 'DESCRIPTION_CHANGED_NAME':
            return { ...state, nome: action.payload }
        case 'DESCRIPTION_CHANGED_EMAIL':
            return { ...state, email: action.payload }
        case 'ADD_NEW_USER':
            
            // if(state.nome == ''){
            //     state.errorNome = "Campo Obrigatorio";
            //     return { ...state}
            // }

            // if(state.email == ''){
            //     state.errorEmail = "Campo Obrigatorio";
            //     return { ...state}
            // }

            if(state.description == "Deslogado"){
                state.description = "Logado";
            }else{
                state.description = "Deslogado";
            }
            

            const ids = Object.keys(state.list).length + 1;
            
            state.list.push({
                _id: ids,
                nome: state.nome,
                email: state.email,
                chat: 'Aberta',
                onChat: [],
                done:true
            });

            return { ...state, list: state.list}          
        case 'SEARCH_USER':
            
            return { ...state, nome: action.payload,  email: action.payload} 
        case 'SEARCH_USER_CHAT':
            
            return { ...state, list: state.list }  
        case 'CLOSE_CLEAR':
            return { ...state, description: '' }   
        case 'VERIFIC':
            return { ...state }  
        case 'VALIDUSER':
            
            if(state.description == "Deslogado"){
                state.description = "Logado";
            }else{
                state.description = "Deslogado";
            }
            return { ...state }               
        default:
            return state
    }
}