const INITIAL_STATE = { 
                        description: 'Deslogado',
                        nome: '',
                        email: '',
                        inputMeg:'',
                        errorEmail:'',
                        chat:[],
                        list:   [{
                                    _id: 1,
                                    nome: 'Teste 1',
                                    email: 'gui.steel2@gmail.com',
                                    chat: 'Fechado',
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
                                ] 
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
            
            if(state.description == "Deslogado"){
                state.description = "Logado";
            }else if(state.description == "Logado" ){
                state.description = "Deslogado";
            }else if(state.description == "Jadastrado"){
                $('.error-email').show();
                $('#inputEmail').css('border-color','red');
                return { ...state, list: state.list}
            }
            
            const ids = Object.keys(state.list).length + 1;
            
            state.list.push({
                _id: ids,
                nome: state.nome,
                email: state.email,
                chat: 'Aberta',
                onChat: [
                    {
                        you: '',
                        resp: 1
                     }
                ],
                done:true
            });

            return { ...state, list: state.list}          
        case 'SEARCH_USER':
        
            var NomeValid = state.list.filter(p => p.nome === state.nome);
            var EmailValid = state.list.filter(p => p.email === state.email);
            
            if(EmailValid != '' && EmailValid[0]['chat'] == "Aberta"){
                return{ ...state, description: 'Jadastrado'};
            }
            return { ...state, description: 'Deslogado'}       
        case 'SEARCH_USER_CHAT':
            let chatUsers = state.list.filter(p => p.nome === state.nome)
        
            return { ...state, chat: chatUsers[0]['onChat'] }  
        case 'CLOSE_CLEAR':
            return { ...state, description: '' }   
        case 'VERIFIC':
            var visivel  = $('.fixed-bottom').css("display");
            if(visivel == "none"){
                $('.fixed-bottom').show();
                $('.open').hide()
            }else{
                $('.fixed-bottom').hide();
                $('.open').show();
            }
            return { ...state }  
        case 'VALIDUSER':
            state.inputMeg = "";
            let email = state.list.filter(p => p.email === state.email);
            let etorn = "";

            if(email.length > 1){
                var num = email.length;
                num -= 1;
                email[num]['chat'] = 'Fechado';
            }else{
                email[0]['chat'] = 'Fechado';
            }
            
            if(state.description == "Deslogado"){
                etorn = "Logado";
            }else{
                etorn = "Deslogado";
            }

            return { ...state, description: etorn }  
        case 'CHATHIST':
            var chatHist = state.list.filter(p => p.nome === state.nome);
            var aux = chatHist[0]['onChat'].length;


            if(action.payload == '4'){
                var mg =state.inputMeg;
                if(mg == 1 ||mg == 2 ||mg == 3 ||mg == 4 ){
                    chatHist[0]['onChat'][aux] = {you: mg, resp: mg};
                }else{
                    chatHist[0]['onChat'][aux] = {you: mg, resp: action.payload};
                }
            }else{
                chatHist[0]['onChat'][aux] = {you: action.payload, resp: action.payload};
            }
            

            return { ...state, chat: chatHist}    
        case  'INPUTB':
            state.inputMeg = action.payload;
            return {...state}
        case 'ENV':
            var chatHist = state.list.filter(p => p.nome === state.nome);
            var aux = chatHist[0]['onChat'].length;
            chatHist[0]['onChat'][aux] = {you: state.inputMeg, resp: ''};
            state.inputMeg = "";
            return {...state, chat: chatHist }
        default:
            return state
    }
}