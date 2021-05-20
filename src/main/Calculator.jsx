import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        this.setDig = this.setDig.bind(this)
        this.setOpe = this.setOpe.bind(this)
        this.clear = this.clear.bind(this)

        this.state = {
            display: ,
        }
    }
    setDig(n) {
        console.log(n)
    }
    setOpe(op) {
        console.log(op)
    }
    clear() {
        setState({
            display: parseInt('00'),
        });
    }
    render() {
        const displayValue = this.Display.value;

        return (
            <div className="calculator">
                <Display value={ } />
                <Button label="AC" click={this.clear} triple />
                <Button label="/" click={this.setOpe} operation />
                <Button label="7" click={this.setDig} />
                <Button label="8" click={this.setDig} />
                <Button label="9" click={this.setDig} />
                <Button label="*" click={this.setOpe} operation />
                <Button label="4" click={this.setDig} />
                <Button label="5" click={this.setDig} />
                <Button label="6" click={this.setDig} />
                <Button label="-" click={this.setOpe} operation />
                <Button label="1" click={this.setDig} />
                <Button label="2" click={this.setDig} />
                <Button label="3" click={this.setDig} />
                <Button label="+" click={this.setOpe} operation />
                <Button label="0" click={this.setDig} double />
                <Button label="." click={this.setDig} />
                <Button label="=" click={this.setOpe} operation />
            </div>
        )
    }
}
