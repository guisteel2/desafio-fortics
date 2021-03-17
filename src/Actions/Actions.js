export const search = event => ({
    type: 'SEARCH'
})

export const changeUsername = event => ({
    type: 'DESCRIPTION_CHANGED_NAME',
    payload: event.target.value
})

export const changeUseremail = event => ({
    type: 'DESCRIPTION_CHANGED_EMAIL',
    payload: event.target.value
})

export const addUser = (event) =>{

    return dispatch =>{
        fetch(event)
        .then(res =>dispatch({type: 'SEARCH_USER'}))
        .then(res =>dispatch({type: 'ADD_NEW_USER'}))
        .then(res =>dispatch(searchChat()))
    }
  
}

export const searchUser = (event) =>{
    return [{
            type: 'SEARCH_USER',
            payload: event.target.value
        },searchChat()]
}

export const searchChat = () => ({
    type: 'SEARCH_USER_CHAT',
})

export const clear = () => {
    return [{ type: 'CLOSE_CLEAR' }, searchChat()]
}

//Ajuste mais para frent
export const validUser = () => {
    return dispatch =>{
        fetch({type: 'VALIDUSER'})
        .then(res =>dispatch({type: 'SEARCH_USER_CHAT'}))
        .then(res =>dispatch({type: 'VALIDUSER'}))
    }
}

export const chatHist = (event) => {
   
    var valor = event.target.value;
    return dispatch =>{
        fetch({type: 'CHATHIST', payload: valor})
        .then(res =>dispatch({type: 'CHATHIST', payload: valor}))
        .then(res =>dispatch({type: 'SEARCH_USER_CHAT'}))
    }
}


export const inputB = event => ({
    type: 'INPUTB',
    payload: event.target.value
})

//valida se achar esta ou nao aberto
export const valids = () => {
    return { type: 'VERIFIC' }
}



