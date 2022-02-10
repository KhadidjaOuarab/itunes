import React from 'react';
import { connect } from 'react-redux'
import './App.css';

function Counter(props) {
console.log(props);

    const handleInc = (evt) => {
    props.dispatch({
    type: 'ADD_ONE'
    })
    }
    const handleDec = (evt) => {
    props.dispatch({
    type: 'MINUS_ONE'
    })
    }

return (
<div className="App">
<header className="App-header">
<h1>{props.count}</h1>
<button onClick={handleInc}>Increment</button>
<button onClick={handleDec}>Decrement</button>
</header>
</div>
);
}
const mapStateToProps = (state) => {
return {
count: state.number
}
}
export default connect(mapStateToProps)(Counter);