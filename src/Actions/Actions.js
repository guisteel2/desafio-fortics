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
    //return [{type: 'ADD_NEW_USER'}, searchChat()]
    //faltando adicionar os middles
    return dispatch =>{
        fetch(searchChat())
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
        fetch({type: 'ADD_NEW_USER'})
        .then(res =>dispatch({type: 'ADD_NEW_USER'}))
        .then(res =>dispatch({type: 'VALIDUSER'}))
        .then(res =>dispatch({type: 'VALIDUSER'}))
    }
}


//valida se achar esta ou nao aberto
export const valids = () => {
    var visivel  = $('.fixed-bottom').css("display");
    if(visivel == "none"){
        $('.fixed-bottom').show();
        $('.open').hide()
    }else{
        $('.fixed-bottom').hide();
        $('.open').show();
    }
    return { type: 'VERIFIC' }
}

