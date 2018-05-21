import React, { Component } from 'react';
import '../../App.css';
import candidateData from '../../../services/CandidateService';
import Search from '../../partials/Search';
import CandidateList from './CandidateList';

class SelectCandidate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allCandidates: [],
            inputValue: '',
            search: []
        }
    }

    componentDidMount() {
        candidateData.allCandidatesData()
            .then(data => {
                this.setState({
                    allCandidates: data,
                    search: data
                })
            })
    }

    handleChange = (event) => {
		const filtered = this.state.allCandidates.filter(el => {
			if(el.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1 ){
                return el;
            }
		});
		this.setState({
			search: filtered,
			inputValue: event.target.value
		});
	}

    render() {
        return (
            <React.Fragment>
                <div className="row right-align">
                    <Search handleChange={this.handleChange} inputValue={this.state.inputValue}/>
                </div>
                <div className="row">
                    {this.state.search.map(el => <CandidateList value={el} key={el.id} />)}
                </div>
                <div className="row">
                    <a class="waves-effect waves-light btn right disabled">NEXT</a>
                </div>
            </React.Fragment>
        )
    }
}

export default SelectCandidate;