import React from 'react'

export default props => {

    
    switch(props.compAssistant) {
        case '1':
            return (
                    <div className="chat">
                        <h3>Como posso te ajudar?</h3>
                        <p>Para facilitar seu atendimento listei algumas opções que podem ajudar:</p>
                        {/* <div className="chat-avatar">
                            <a className="avatar avatar-online" data-toggle="tooltip" data-placement="right" data-original-title="June Lane">
                                <img src="https://yt3.ggpht.com/ytc/AAUvwnj113LDVrY8FF0ulblIPF4cgFF4F2r3SNoTFE6Q=s900-c-k-c0x00ffffff-no-rj" />
                                <i></i>
                            </a>
                        </div> */}

                        <div className="chat-body">
                            <div className="chat-content">
                                <button type="button" onClick={props.chatHist} value="1" className="btn btn-primary btn-lg btn-block "><a>1</a>iniciar Atendimento</button>
                                <button type="button" onClick={props.chatHist} value="2" className="btn btn-secondary btn-lg btn-block"><a>2</a>Suporte</button>
                                <button type="button" onClick={props.chatHist} value="3" className="btn btn-secondary btn-lg btn-block"><a>3</a>Comercial</button>
                                <button type="button" onClick={props.validUser}  className="btn btn-secondary btn-lg btn-block"><a>4</a>Encerrar atendimento</button>
                                <p>Para chamar novamente digite Help</p>
                                <time className="chat-time">11:37:08 am</time>
                            </div>
                        </div>
                        
                    </div>
                    )
        case '2':
            return (
                <div className="chat">
                    <div className="chat-avatar">
                        <a className="avatar avatar-online" data-toggle="tooltip" data-placement="right" data-original-title="June Lane">
                            <img src="https://yt3.ggpht.com/ytc/AAUvwnj113LDVrY8FF0ulblIPF4cgFF4F2r3SNoTFE6Q=s900-c-k-c0x00ffffff-no-rj" />
                            <i></i>
                        </a>
                    </div>

                    <div className="chat-body">
                        <div className="chat-content">
                            <p>Olá,
                            <br/>Aqui e o Suporte no momento estamo em manutenção
                            <br/>Para mais ajuda digite help
                            </p>
                            <time className="chat-time">11:37:08 am</time>
                        </div>
                    </div>
                </div>
                )    
        case '3':
            return (
                <div className="chat">
                    <div className="chat-avatar">
                        <a className="avatar avatar-online" data-toggle="tooltip" data-placement="right" data-original-title="June Lane">
                            <img src="https://yt3.ggpht.com/ytc/AAUvwnj113LDVrY8FF0ulblIPF4cgFF4F2r3SNoTFE6Q=s900-c-k-c0x00ffffff-no-rj" />
                            <i></i>
                        </a>
                    </div>

                    <div className="chat-body">
                        <div className="chat-content">
                            <p>Olá,
                            <br/>Aqui e do Comercial no momento estamo em manutenção
                            <br/>Para mais ajuda digite help
                            </p>
                            <time className="chat-time">11:37:08 am</time>
                        </div>
                    </div>
                </div>
                )  
        case '4':
            return (
                <div className="chat">
                    <div className="chat-avatar">
                        <a className="avatar avatar-online" data-toggle="tooltip" data-placement="right" data-original-title="June Lane">
                            <img src="https://yt3.ggpht.com/ytc/AAUvwnj113LDVrY8FF0ulblIPF4cgFF4F2r3SNoTFE6Q=s900-c-k-c0x00ffffff-no-rj" />
                            <i></i>
                        </a>
                    </div>

                    <div className="chat-body">
                        <div className="chat-content">
                            <p>Olá, Vincular alguns parametros(Banco)</p>
                            <time className="chat-time">11:37:08 am</time>
                        </div>
                    </div>
                </div>
                )        
        default:
            return ( 
            <div className="chat">
            <div className="chat-avatar">
                <a className="avatar avatar-online" data-toggle="tooltip" data-placement="right" data-original-title="June Lane">
                    <img src="https://yt3.ggpht.com/ytc/AAUvwnj113LDVrY8FF0ulblIPF4cgFF4F2r3SNoTFE6Q=s900-c-k-c0x00ffffff-no-rj" />
                    <i></i>
                </a>
            </div>

            <div className="chat-body">
                <div className="chat-content">
                    <p>Olá, Espere criar no banco</p>
                    <time className="chat-time">11:37:08 am</time>
                </div>
            </div>
            </div>
            )
    }

    
}
