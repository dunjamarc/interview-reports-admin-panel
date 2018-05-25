import React, { Component } from 'react';
import '../../App.css';
import reportData from '../../../services/ReportService';

class FillDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            date: '',
            phase: '',
            status: '',
            notes: ''
        }
    }

    handleChange = (event) => {
        switch (event.target.name) {
            case "date": this.setState({ date: event.target.value });
                break;
            case "phase": this.setState({ phase: event.target.value });
                break;
            case "status": this.setState({ status: event.target.value });
                break;
            default: this.setState({ notes: event.target.value });
                break;
        }
        if (this.state.date !== '' && this.state.phase !== '' && this.state.status !== '' && this.state.notes !== '') {
            this.setState({
                disabled: false
            })
        }

    }

    handleClick = (event) => {

        const obj = {
            candidateId: parseInt(sessionStorage.getItem('candidateId')),
            candidateName: sessionStorage.getItem('candidateName'),
            companyId: parseInt(sessionStorage.getItem('companyId')),
            companyName: sessionStorage.getItem('companyName'),
            interviewDate: new Date(this.state.date),
            phase: this.state.phase,
            status: this.state.status,
            note: this.state.notes
        };
        
        reportData.sendReport(`http://localhost:3333/api/reports`, obj)
            .then(() => {
                this.props.value.history.push('/');
            })
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
                            <input type="date" name="date" max={this.date()} onChange={this.handleChange} required />
                        </form>
                    </div>
                    <div className="col l4 m6 s12 select">
                        <p className="mail">Phase:</p>
                        <select required name="phase" onChange={this.handleChange}>
                            <option value="0" disabled selected>Technical</option>
                            <option value="cv">cv</option>
                            <option value="hr">hr</option>
                            <option value="tech">tech</option>
                            <option value="final">final</option>
                        </select>
                    </div>
                    <div className="col l4 m6 s12 select">
                        <p className="mail">Status:</p>
                        <select required name="status" onChange={this.handleChange}>
                            <option value="" disabled selected>Select</option>
                            <option value="passed">passed</option>
                            <option value="declined">declined</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col l12 m12 s12 select">
                        <p className="mail">Notes:</p>
                        <div className="input-field col s12">
                            <textarea name="notes" id="textarea1" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <a onClick={() => this.props.page('companies')} className="waves-effect waves-light btn left">BACK</a>
                    <a onClick={this.handleClick} className={`waves-effect waves-light btn right ${
                        !this.state.disabled ? '' : 'disabled'}`}>SUBMIT</a>
                </div>
            </React.Fragment>
        )
    }
}

export default FillDetails;