import React, { Component } from 'react';
import '../../App.css';

class FillDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            disabled: true
        }
    }


    handleChange = (event) => {

        this.setState({
            inputValue: event.target.value
        });
    }

    date = () => {
        let today = new Date();
        let month = `${today.getMonth() + 1}`;
        month.length === 1 ? month = `0${month}` : month;
        let day = `${today.getDate()}`;
        day.length === 1 ? day = `0${day}` : day;
        return `${today.getFullYear()}-${month}-${day}`;
    }

    render() {

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col l4 m6 s12">
                        <form>
                            <p className="mail">Interview Date:</p>
                            <input type="date" name="date" max={this.date()} placeholder="Date" required />
                        </form>
                    </div>
                    <div className="col l4 m6 s12 select">
                        <p className="mail">Phase:</p>
                        <select required>
                            <option value="" disabled selected>Technical</option>
                            <option value="1">cv</option>
                            <option value="2">hr</option>
                            <option value="3">tech</option>
                            <option value="4">final</option>
                        </select>
                    </div>
                    <div className="col l4 m6 s12 select">
                        <p className="mail">Status:</p>
                        <select required>
                            <option value="" disabled selected>Select</option>
                            <option value="1">passed</option>
                            <option value="2">declined </option>
                        </select>
                    </div>
                </div>
                <div className="row">

                </div>
                <div className="row">
                    <a onClick={() => this.props.page('companies')} className="waves-effect waves-light btn left">BACK</a>
                    <a className={`waves-effect waves-light btn right ${
                        !this.state.disabled ? '' : 'disabled'}`}>NEXT</a>
                </div>
            </React.Fragment>
        )
    }
}

export default FillDetails;