import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class CandidateList extends Component {

    /*constructor (props){
        super(props);
        this.state = {
            showReport: true
        }
    }*/

    render() {
        return (
            <div className="col l6 m6 s12">
                <div className="card horizontal">
                    <div className="image valign-wrapper">
                        <img className="circle" src={this.props.value.image()} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{this.props.value.name}</p>
                            <p className="mail">{this.props.value.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CandidateList;