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

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <Search />
                </div>
                <div className="row">
                    {this.state.search.map(el => <CandidateList value={el} key={el.id} />)}
                </div>
                <div className="row">
                    <button>NEXT</button>
                </div>
            </React.Fragment>
        )
    }
}

export default SelectCandidate;