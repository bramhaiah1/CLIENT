import io from "socket.io-client";

import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
// import { LocationView } from "./components/LocationView";
// creating custom view in react native gifted chat


export function App() {
    var socket;
    socket = io("http://c574a3558a86.ngrok.io ");

    socket.on("chat message1", msg1 => {
        // alert("o")
        //state.message = msg1.msg
        //messages1 = state.message
        const message = [{
            _id: msg1.id,
            text: msg1.msg,
            createdAt: new Date(),
            user: {
                _id: 1,
                avatar: "https://randomuser.me/api/portraits/women/79.jpg",
                name: msg1.user
            }
        }]
        state.load = false;
        // alert(msg1.user)
        onSend(message)

        // setMessages((previousMessages) =>
        //   GiftedChat.append(previousMessages, message))

        //onSend(messages1)
        // messages.text = state.message;
        //  onSend(messages)

        // alert(state.message)
    })


    const [messages, setMessages] = useState([]);
    // const [messages1, setMessages] = useState([]);
    var state = {
        load: true,
    }
    //   const renderBubble = (props) => {
    //     const { currentMessage } = props;
    //     console.log(props.currentMessage);
    //     if (currentMessage.location) {
    //       return <LocationView location={currentMessage.location} />;
    //     }
    //     return <Bubble {...props} />;
    //   };

    useEffect(() => {


        setMessages([
            {
                _id: 2,
                text: 'Hello developer',

                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },

            {
                _id: 1,
                text: 'Hello developer',

                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]
        );
    }, []);


    const onSend = ((messages) => {
        console.log("msg : ", { messages });
        if (state.load) {
            let data = {
                user: 'Naveen',
                reply: 'ram',
                msg: messages[0].text
            }
            socket.emit('chat message1', data);
        } else { state.load = true }
        //alert(messages[0].text)
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages)
        );
    })

    return (
        <GiftedChat
            //   renderBubble={renderBubble}
            messages={messages}
            // renderCustomView={LocationComponent}
            onSend={(messages) => onSend(messages)}

        />
    );
}

export default App;
