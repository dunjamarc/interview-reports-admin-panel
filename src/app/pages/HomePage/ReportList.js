import React, { Component } from 'react'
import Modal from './Modal';
import M from "materialize-css";

class ReportList extends Component {

    componentDidMount() {
        var elem = document.getElementById(this.props.value.id);
        M.Modal.init(elem);
    }

    date = (props) => {
        let intDate = new Date(this.props.value.interviewDate);
        return `${intDate.getDate()}.${intDate.getMonth() + 1}.${intDate.getFullYear()}.`;
    }

    render() {
        return (
            <div className="row">
                <div className="wrapper">
                    <div>
                        <p>{this.props.value.companyName}</p>
                        <p className="label">Company</p>
                    </div>
                    <div>
                        <p>{this.props.value.candidateName}</p>
                        <p className="label">Candidate</p>
                    </div>
                    <div>
                        <p>{this.date()}</p>
                        <p className="label">Interview Date</p>
                    </div>
                    <div>
                        <p>{this.props.value.status}</p>
                        <p className="label">Status</p>
                    </div>
                    <div>
                        <a className="modal-trigger" href={`#${this.props.value.id}`}>
                            <i className="material-icons">remove_red_eye</i>
                        </a>
                        <a className="close" href="" onClick={() => this.props.deleteReport(this.props.value.id)} >
                            <i className="material-icons">clear</i>
                        </a>
                    </div>
                </div>
                <div id={this.props.value.id} className="modal">
                    <Modal value={this.props.value} date={this.date} />
                </div>
            </div>
        )
    }
}

export default ReportList;