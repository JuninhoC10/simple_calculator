import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="calculator">
                <Display value={100} />
                <Button label="AC" triple={true} />
                <Button label="/" operation={true} />
                <Button label="7" />
                <Button label="8" />
                <Button label="9" />
                <Button label="*" operation={true} />
                <Button label="4" />
                <Button label="5" />
                <Button label="6" />
                <Button label="-" operation={true} />
                <Button label="1" />
                <Button label="2" />
                <Button label="3" />
                <Button label="+" operation={true} />
                <Button label="0" double={true} />
                <Button label="." />
                <Button label="=" operation={true} />
            </div>
        )
    }
}
