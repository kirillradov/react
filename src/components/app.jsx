import React from 'react';


export default class App extends React.Component {
    static propTypes = {
        counter: PropTypes.number,
    };
    static defaultProps ={
        counter: 0,
    };

    render() {
        return (
            <h1>Наш первый React-компонент</h1>
        )
    }
}
