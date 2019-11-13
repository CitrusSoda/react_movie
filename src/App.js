import React from 'react';
//prop 확인
import PropTypes from "prop-types";

//클래스로 할려면 필수
class App extends React.Component {
    //state에 안넣어도 돌아감
    state = {
        isLoading: true,
        movies: []
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 6000);
    }

    render() {
        const {isLoading} = this.state;
        return (
            <div>
                {isLoading ? "Loading..." : "We are ready"}
            </div>
        )
    }
}

export default App;
