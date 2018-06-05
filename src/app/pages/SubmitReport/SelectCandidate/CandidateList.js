import React, { Component } from 'react'

class CandidateList extends Component {

    saveInfo = (event) => {
        sessionStorage.setItem('candidateId', this.props.value.id);
        sessionStorage.setItem('candidateName', this.props.value.name);
    }

    render() {
        return (
            <div onClick={this.props.click} className="col l6 m6 s12" id={this.props.id}>
                <div onClick={this.saveInfo} className={`card horizontal ${this.props.class}`}>
                    <div className="image valign-wrapper">
                        <img className="circle" src={this.props.value.image()} alt="" />
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