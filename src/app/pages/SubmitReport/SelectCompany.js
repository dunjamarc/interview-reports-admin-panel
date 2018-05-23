import React, { Component } from 'react';
import '../../App.css';
import companyData from '../../../services/CompanyService';
import Search from '../../partials/Search';
import CompanyList from './CompanyList';

class SelectCompany extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allCompanies: [],
            inputValue: '',
            search: [],
            class: [],
            disabled: true
        }
    }

    componentDidMount() {
        companyData.allCompaniesData()
            .then(data => {
                this.setState({
                    allCompanies: data,
                    search: data,
                    class: data.map(el => '')
                })
            })
    }

    handleChange = (event) => {
        const filtered = this.state.allCompanies.filter(el => {
            if (el.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1) {
                return el;
            }
        });
        this.setState({
            search: filtered,
            inputValue: event.target.value
        });
    }

    select = (event) => {        
        
        let target = event.currentTarget.id;
        let changeClass = this.state.class.map((el, i) => i == target ? 'selected' : '');

        this.setState({
            class: changeClass,
            disabled: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="row right-align">
                    <Search handleChange={this.handleChange} inputValue={this.state.inputValue} />
                </div>
                <div className="row">
                    {this.state.search.map((el, i) =>
                        <CompanyList key={i} id={i} click={this.select} class={this.state.class[i]} value={el}/>
                    )}
                </div>
                <div className="row">
                    <a onClick={() => this.props.page('candidates')} className="waves-effect waves-light btn left">BACK</a>
                    <a onClick={() => this.props.page('reportDetails')} className={`waves-effect waves-light btn right ${
                        !this.state.disabled ? '' : 'disabled'}`}>NEXT</a>
                </div>
            </React.Fragment>
        )
    }
}

export default SelectCompany;