import React, { Component } from 'react';
import '../../App.css';
import Search from '../../partials/Search';
import ReportList from './ReportList';
import reportData from '../../../services/ReportService';

class HomePage extends Component {

    constructor (props){
        super(props);
        this.state = {
            allReports: []
        }
    }

    componentDidMount(){
        reportData.allReportsData()
        .then(data => {
            this.setState({
                allReports: data
            })
        })
    }

    render () {
        return (
            <div className='container'>

                {this.state.allReports.map(el => <ReportList value={el} key={el.id} />)}
            </div>
            
        )
    }
}

export default HomePage;