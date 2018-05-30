import React, { Component } from 'react';
import '../../App.css';
import SelectCandidate from './SelectCandidate';
import SelectCompany from './SelectCompany';
import FillDetails from './FillDetails';
import ShowSelection from './ShowSelection';

class SubmitReport extends Component {

    constructor (props){
        super(props);
        this.state = {
            show: 'candidates'
        }
    }

    goToPage = (page) => {
        this.setState({
            show: page
        })
    }

    render() {
        
        return (
            <div className='container'>
                <div className="row">
                    <div className="col l3 m3">
                        <ul className="panel-nav">
                            <li className={this.state.show == 'candidates' ? 'active' : ''}>
                                <div className="numberCircle valign-wrapper">1</div><h6 className="panel-heading">Select Candidate</h6>
                            </li>
                            <li className={this.state.show == 'companies' ? 'active' : ''}>
                                <div className="numberCircle">2</div><h6 className="panel-heading">Select Company</h6>
                            </li>
                            <li className={this.state.show == 'reportDetails' ? 'active' : ''}>
                                <div className="numberCircle">3</div><h6 className="panel-heading">Fill Report Detail</h6>
                            </li>
                        </ul>
                        {this.state.show == 'candidates' ? '' : <ShowSelection show={this.state.show}/>}
                    </div>
                    <div className="col l9 m9 panel">
                        {this.state.show == 'candidates' ? <SelectCandidate page={this.goToPage} /> : ''}
                        {this.state.show == 'companies' ? <SelectCompany page={this.goToPage} /> : ''}
                        {this.state.show == 'reportDetails' ? <FillDetails value={this.props} page={this.goToPage} /> : ''}
                    </div>
                </div>
            </div>
        )
    }
}

export default SubmitReport;