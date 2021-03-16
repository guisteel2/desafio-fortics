import React from 'react'

export default props => {

    switch(props.compUser) {
        case '1':
            return (
                    <div  className="chat chat-left">

                        <div className="chat-avatar">
                            <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="Edward Fletcher">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" />
                                <i></i>
                            </a>
                        </div>

                        <div className="chat-body">
                            <div className="chat-content">
                                <p>Help</p>
                                <time className="chat-time">11:39:57 am</time>
                            </div>
                        </div>
                    </div>
                    )
        case '2':
            return (
                    <div className="chat chat-left">

                        <div className="chat-avatar">
                            <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="Edward Fletcher">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" />
                                <i></i>
                            </a>
                        </div>

                        <div className="chat-body">
                            <div className="chat-content">
                                <p>Preciso falar com o suport.</p>
                                <time className="chat-time">11:39:57 am</time>
                            </div>
                        </div>
                    </div>
                )
        case '3':
            return (
                    <div className="chat chat-left">

                        <div className="chat-avatar">
                            <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="Edward Fletcher">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" />
                                <i></i>
                            </a>
                        </div>

                        <div className="chat-body">
                            <div className="chat-content">
                                <p>Preciso falar com o comercial.</p>
                                <time className="chat-time">11:39:57 am</time>
                            </div>
                        </div>
                    </div>
                ) 
        case '4':
            return (
                    <div className="chat chat-left">

                        <div className="chat-avatar">
                            <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="Edward Fletcher">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" />
                                <i></i>
                            </a>
                        </div>

                        <div className="chat-body">
                            <div className="chat-content">
                                <p>Preciso falar com um atendende.</p>
                                <time className="chat-time">11:39:57 am</time>
                            </div>
                        </div>
                    </div>
                )
        case '':
            return (
                    <div className="chat chat-left">
                    </div>
                )             
        default:
            return (<div>caso de o usuario ter digitado no compo</div>)
    }
   
}