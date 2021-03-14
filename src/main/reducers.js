import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () =>({
        description: 'usuarios',
        nome: '',
        email: '',
        list: [{
                    _id: 1,
                    nome: 'Teste 1',
                    email: 'gui.steel2@gmail.com',
                    chat: 'Fechado',
                    done:true
                },
                {
                    _id: 2,
                    nome: 'Teste 2',
                    email: 'gui.steel2@gmail.com',
                    chat: 'Aberta',
                    done:true
                },
                {
                    _id: 3,
                    nome: 'Teste 3',
                    email: 'gui.steel2@gmail.com',
                    chat: 'Fechado',
                    done:true
                }]
    })
})

export default rootReducer