import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/MessageField.jsx';

ReactDOM.render (
    <App />,
    document.getElementById('root' ),
);


/*import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const messages = ['Привет', 'Привет в этом чатике!'];

const Message = (props) => <div>{ props.message }</div>;

const MessageField = (props) => <div>
    <h1>Кажется, мы начали писать чат.</h1>
    { props.messages.map(message => <Message message = { message }/>) }
    <input id='inputMessage' type="text" placeholder="ваше сообщение"/><button onClick= { sendMessage }>отправить</button>
    <button onClick= { clearMessage }>очистить</button>
</div>;

function renderChat() {
    ReactDOM.render (
        <MessageField messages={ messages } />,
        document.getElementById('root' ),
    );
}

function sendMessage() {
    let newMessage = document.getElementById('inputMessage').value;
    messages.push(newMessage);
    renderChat();
    }

function clearMessage() {
    document.getElementById('inputMessage').value = '';
}

renderChat();*/