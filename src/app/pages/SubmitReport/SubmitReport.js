import React, { Component } from 'react';
import '../../App.css';
import SelectCandidate from './SelectCandidate';

class SubmitReport extends Component {

    /*constructor (props){
        super(props);
        this.state = {
            allReports: [],
            inputValue: '',
            search: []
        }
    }

    componentDidMount(){
        reportData.allReportsData()
        .then(data => {
            this.setState({
                allReports: data,
                search: data
            })
        })
    }*/

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col l3 m3">
                        <ul className="panel-nav">
                            <li><div className="numberCircle valign-wrapper">1</div><h6 className="panel-heading">Select Candidate</h6></li>
                            <li><div className="numberCircle">2</div><h6 className="panel-heading">Select Company</h6></li>
                            <li><div className="numberCircle">3</div><h6 className="panel-heading">Fill Report Detail</h6></li>
                        </ul>

                    </div>
                    <div className="col l9 m9 panel">
                        <SelectCandidate/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubmitReport;