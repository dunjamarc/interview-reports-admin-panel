import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ReportList extends Component {

    date = (props) => {
        let intDate = new Date(this.props.value.interviewDate);
        return `${intDate.getDate()}.${intDate.getMonth() + 1}.${intDate.getFullYear()}.`;
    }

    render() {
        return (
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
                                <button><i class="material-icons">remove_red_eye</i></button><button><i class="material-icons">clear</i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ReportList;