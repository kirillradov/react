import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
    state = {
        messages: ["Привет!", "Как дела?"],
        newMessage: false,
    };

    handleClick = () => {
        let newMessage = document.getElementById('inputMessage').value;
        let author = document.getElementById('inputName').value;
        if (author) {
            this.setState({ messages: [...this.state.messages, `${author}, ${newMessage}`] });
            this.state.newMessage = true;
        } else {
            this.setState({ messages: [...this.state.messages, `${newMessage}`] });
            this.state.newMessage = true;
        }

    };

    handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            this.handleClick();
        }
    };

    clearMessage = () => {
        document.getElementById('inputMessage').value = '';
    };

    componentDidUpdate() {
        let author = document.getElementById('inputName').value;
        if (this.state.newMessage && document.getElementById('inputMessage').value !== '') {
            if (author) {
                setTimeout(() =>
                    this.setState(
                        { messages: [...this.state.messages, `${author}! Не приставай ко мне, я робот!` ] }), 1000);
                this.state.newMessage = false;
            } else {
                setTimeout(() =>
                    this.setState(
                        { messages: [...this.state.messages, `Не приставай ко мне, я робот!` ] }), 1000);
                this.state.newMessage = false;
            }

        }
    }
    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={ index } text={ text } />));

        return <div>
            { messageElements }
            <input id='inputName' type="text" placeholder="Имя"/>
            <input id='inputMessage' type="text" placeholder="ваше сообщение" onKeyPress={this.handleKeyPress}/>
            <button onClick= { this.handleClick }>отправить</button>
            <button onClick= { this.clearMessage }>очистить</button>
        </div>
    }
}
//*