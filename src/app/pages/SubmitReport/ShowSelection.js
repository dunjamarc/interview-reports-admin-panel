import React from 'react';
import '../../App.css';

const ShowSelection = (props) => {

    return (

        <div className="showSelection">
            <p className="mail">Candidate:</p>
            <h6>{sessionStorage.getItem('candidateName')}</h6>
            {props.show === 'companies' ? '' :
                <React.Fragment>
                    <p className="mail">Company:</p>
                    <h6>{sessionStorage.getItem('companyName')}</h6>
                </React.Fragment>}
        </div>

    )

}

export default ShowSelection;