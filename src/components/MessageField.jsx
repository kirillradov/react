import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import '../styles/styles.css';

export default class MessageField extends React.Component {
    state = {
        messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }],
        input: '',
        NewMessage: false,
       };

    textInput = React.createRef();

    componentDidMount() {
        this.textInput.current.focus();
        this.scrollToBottom();
            }


    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].sender === 'me' && this.state.NewMessage) {
            setTimeout(() =>
                    this.setState({
                        messages: [...this.state.messages, {text: 'Не приставай ко мне, я робот!', sender: 'bot'} ] }),
                1000);
            this.state.NewMessage = false;
            this.textInput.current.focus();
        }
        this.scrollToBottom();
            }

    onFocusChange = () => {
        this.setState({ isFocused: true });
    };

    handleSendMessage = () => {
        const str = this.state.input.trim();
        if (str) {
            this.setState({
                messages: [...this.state.messages, {text: str, sender: 'me'} ],
                input: '',
            });
            this.state.NewMessage = true;
        }
    };

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleSendMessage()
        }
    };

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={ index } text={ message.text } sender={ message.sender } />));

        return <div className="layout">
            <div className="message-field">
                { messageElements }
                <div style={ { display: 'flex', marginTop: 'auto', padding: '10px' } }>
                    <TextField
                        name="input"
                        ref={ this.textInput }
                        fullWidth={ true }
                        hintText="Введите сообщение"
                        style={ { fontSize: '22px' } }
                        onChange={ this.handleInput }
                        value={ this.state.input }
                        onKeyUp={ this.handleKeyUp }
                    />
                    <FloatingActionButton onClick={ this.handleSendMessage }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>
                <div style={{ float:"left", clear: "both" }}
                     ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        </div>
    }

}