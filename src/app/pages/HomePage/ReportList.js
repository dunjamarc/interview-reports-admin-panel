import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Modal from './Modal';
import M from "materialize-css";

class ReportList extends Component {

    constructor (props){
        super(props);
        this.state = {
            showReport: true
        }
    }

    componentDidMount() {
        var elem = document.getElementById(this.props.value.id);
        M.Modal.init(elem);
    }

    date = (props) => {
        let intDate = new Date(this.props.value.interviewDate);
        return `${intDate.getDate()}.${intDate.getMonth() + 1}.${intDate.getFullYear()}.`;
    }

    deleteReport = () => {
        this.setState({
            showReport: false
        })
    }

    render() {
        return (
            this.state.showReport ?
            <div className="row">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p>{this.props.value.companyName}</p>
                                <p className="label">Company</p>
                            </td>
                            <td>
                                <p>{this.props.value.candidateName}</p>
                                <p className="label">Candidate</p>
                            </td>
                            <td>
                                <p>{this.date()}</p>
                                <p className="label">Interview Date</p>
                            </td>
                            <td>
                                <p>{this.props.value.status}</p>
                                <p className="label">Status</p>
                            </td>
                            <td>
                                <a className="modal-trigger" href={`#${this.props.value.id}`}><i className="material-icons">remove_red_eye</i></a><a className="close" href="#" onClick={this.deleteReport} ><i className="material-icons">clear</i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id={this.props.value.id} className="modal">
                    <Modal value={this.props.value} date={this.date} />
                </div>
            </div>  : ''
        )
    }
}

export default ReportList;