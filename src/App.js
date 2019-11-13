import React from 'react';
//prop 확인
import PropTypes from "prop-types";

//클래스로 할려면 필수
class App extends React.Component {
    //state에 바꾸고싶은 data를 넣는다
    state = {
        count: 0
    };
    // setState를 사용하지 않으면 render함수를 부를 수 없다
    add = () => {
        // 추천하는 방법
        this.setState(current => ({count: current.count + 1}));
    };
    minus = () => {
        // this.state는 성능저하 문제 발생가능성이 있다.
        this.setState({count: this.state.count - 1});
    };

    // react.component에있는 함수
    render() {
        return (
            <div>
                <h1>The number is : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App;
