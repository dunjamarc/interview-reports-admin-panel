import React, { Component } from 'react'

class CompanyList extends Component {

    saveInfo = (event) => {
        sessionStorage.setItem('companyId', this.props.value.id);
        sessionStorage.setItem('companyName', this.props.value.name);
    }

    render() {
        return (
            <div onClick={this.props.click} className="col l12 m12 s12" id={this.props.id}>
                <div onClick={this.saveInfo} className={`company ${this.props.class}`}>
                    <p>{this.props.value.name}</p>
                </div>
            </div>
        )
    }
}

export default CompanyList;