import React, { Component } from 'react';
import '../../App.css';
import Search from '../../partials/Search';
import ReportList from './ReportList';
import reportData from '../../../services/ReportService';

class HomePage extends Component {

    constructor (props){
        super(props);
        this.state = {
            allReports: [],
            inputValue: '',
            search: []
        }
    }

    fetchData = () => {
        reportData.allReportsData()
        .then(data => {
            this.setState({
                allReports: data,
                search: data
            })
        })
    }

    componentDidMount(){
        this.fetchData()
    }

    handleChange = (event) => {
		const filtered = this.state.allReports.filter(el => {
			if(el.candidateName.toLowerCase().search(event.target.value.toLowerCase()) !== -1 || el.companyName.toLowerCase().search(event.target.value.toLowerCase()) !== -1){
                return el;
            }
		});
		this.setState({
			search: filtered,
			inputValue: event.target.value
		});
    }
    
    deleteReport = (id) => {
        reportData.deleteReport(id)
        .then(response => {
            this.fetchData()
        })
    }

    render () {
        return (
            <div className='container'>
                <Search handleChange={this.handleChange} inputValue={this.state.inputValue}/>
                {this.state.search.map(el => <ReportList value={el} key={el.id} deleteReport={this.deleteReport}/>)}
            </div>
            
        )
    }
}

export default HomePage;