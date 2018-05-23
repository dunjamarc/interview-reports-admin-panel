import React, { Component } from 'react'

class CompanyList extends Component {

    saveInfo = (event) => {
        sessionStorage.setItem('companyId', this.props.value.id);
        sessionStorage.setItem('companyName', this.props.value.name);
    }

    render() {
        return (
            <div onClick={this.props.click} className="col l6 m6 s12" id={this.props.id}>
                <div onClick={this.saveInfo} className={`card horizontal ${this.props.class}`}>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{this.props.value.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CompanyList;