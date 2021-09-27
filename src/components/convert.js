import React, { Component } from 'react';
import '../App.css'


class convert extends Component {
    constructor() {
        super()

        this.state = {
            currencies: ["USD", 'AUD', 'SCD', 'PHP', 'EUR', "HUF", "RON", "IDR", "RUB", "BGN"],
            amount: "",
            base: "USD",
            convertTo: 'EUR',
            result: ''

        }
    }
    selectNow = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        },
            this.calculate
        );
    }
    handleAmount = (e) => {
        this.setState({
            amount: e.target.value
        },
            this.calculate
        );
    }
    calculate = () => {
        const amount = this.state.amount;
        if (amount === isNaN) {
            return
        } else {
            fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
                .then(res => res.json())
                .then(data => {
                    const result = (data.rates[this.state.convertTo] * amount).toFixed(3);
                    this.setState({
                        result
                    })
                })
        }
    }
    render() {

        return (
            <>

                <header className="App-header">
                    <div className="convertHeading">
                        <h3>Currency Conveter</h3>
                        <p>Choose the currency and the amount to get started</p>
                    </div>
                    <div className="convert">
                        <div className='convertColumn'>

                            <div className='convertSelect'>
                                <p>To</p>
                                <select className='d'
                                    name="convertTo"
                                    onChange={this.selectNow}
                                    value={this.state.convertTo}>
                                    {this.state.currencies.map(currency =>
                                        <option key={currency} value={currency}>{currency}</option>)}

                                </select>
                            </div>
                            <div className='convertSelect'>
                                <p>From</p>
                                <select className='d'
                                    value={this.state.base}
                                    onChange={this.selectNow}
                                    name="base" >
                                    {this.state.currencies.map(currency =>
                                        <option key={currency} value={currency}>{currency}</option>)}

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="amountColumn">
                        <p>Amount</p>
                        <input value={this.state.amount} onChange={this.handleAmount} type="number" placeholder="0"></input>
                    </div>
                    <div className="result">
                        <p>{this.state.result}</p>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>

                </header>
            </>
        )
    }
}
export default convert;