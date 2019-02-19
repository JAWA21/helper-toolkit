import React, { Component } from 'react';

class PxRem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 16,
            result: '',
            list: '12'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleListChange = this.handleListChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleListChange(event) {
        const saveValue = event.target.value;
        this.setState({
            list: saveValue 
        });
        console.log(saveValue);
        this.setState({list: event.target.value});
    }
    
    handleSubmit(event) {
        let baseVal = this.state.value;
        let list = this.state.list.split(',');
        let html = [];
        list.forEach(i => {
            html.push(<li key={i.toString()}>{i} px = {calculate(i, baseVal)} rem </li>);
        });
        this.setState({result: html});
        event.preventDefault();
    }

    render() {
        return (
            <div className="tile is-child box">
                <p className="title">Px to Rem Converter</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Base px:</label>
                        <div className="control is-expanded">
                            <input className="input" type="text" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <label className="label">Convert to rem: </label>
                        <div className="control">
                            <input className="input" type="text" value={this.state.list} onChange={this.handleListChange}/>
                        </div>
                        <div className="control">
                            <input className="button is-primary" type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
                <div>
                Result: {this.state.result}
                </div>
            </div>
        );
    }
}

function calculate(item, base){
    let px = parseInt(item);
    let rem = parseFloat((px / parseInt(base, 10)).toPrecision(4));
    return rem;
}

export default PxRem;
