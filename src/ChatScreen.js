import React, { useState } from 'react'
import "./chatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {

    const [input,setInput] = useState('');

    const [message,setMessage]= useState([
        {
            name:'wllen',
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmoTJSFg_ARlaGnQLgqDwa2veqA3mG_UMB5w&usqp=CAU",
            message:'whats up'
        },
        {
            name:'walk',
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm44O4U2FQQu1SphKzW170cZa_t9Q7fsH2sw&usqp=CAU",
            message:'how are u'
        },
        {
            message:"hi! how are you Ellen"
        }
    ])

    const handleSend = e => {
        e.preventDefault();

        setMessage([...message,{ message: input }]);
        setInput("");
    };


    return (
        <div className="chatScreen">
            <h2>Chat Screen</h2>
            <p className="chatScreen__timestamp">you matched with ellen on 10/08/2020</p>
            {message.map((message) =>(
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar 
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.Image}
                        />
                    <p className="chatScreen__text">{message.message}</p>
                </div> ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>

                )
            
            ))}
            
                <form className="chatScreen__input">
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputfield"
                    placeholder="Type a Message"
                    type="text" />
                    <button onClick={handleSend} type="submit" className="chatScreen__input__button">SENT</button>
                </form>
            

        </div>
    );
}

export default ChatScreen;
