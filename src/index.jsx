import React from 'react';
import ReactDOM from 'react-dom';

const messages = ['Привет', 'Привет в этом чатике!'];

const Message = (props) => <div>{ props.message }</div>;

const MessageField = (props) => <div>
    <h1>Кажется, мы начали писать чат.</h1>
    { props.messages.map(message => <Message message = { message }/>) }
</div>;

    ReactDOM.render (
    <MessageField messages={ messages } />,
        document.getElementById('root' ),
);