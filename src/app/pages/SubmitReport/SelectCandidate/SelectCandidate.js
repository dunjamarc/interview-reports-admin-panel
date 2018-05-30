import React, { Component } from 'react';
import '../../../App.css';
import candidateData from '../../../../services/CandidateService';
import Search from '../../../partials/Search';
import CandidateList from './CandidateList';

class SelectCandidate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allCandidates: [],
            inputValue: '',
            search: [],
            class: [],
            disabled: true
        }
    }

    componentDidMount() {
        candidateData.allCandidatesData()
            .then(data => {
                this.setState({
                    allCandidates: data,
                    search: data,
                    class: data.map(el => '')
                })
            })
    }

    handleChange = (event) => {
        const filtered = this.state.allCandidates.filter(el => {
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
                        <CandidateList key={i} id={i} click={this.select} class={this.state.class[i]} value={el}/>
                        
                    )}
                </div>
                <div className="row">
                    <a onClick={() => this.props.page('companies')} className={`waves-effect waves-light btn right ${
                        !this.state.disabled ? '' : 'disabled'}`}>NEXT</a>
                </div>
            </React.Fragment>
        )
    }
}

export default SelectCandidate;