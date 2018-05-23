import React from 'react';

const SelectCompany = (props) => {
    return (
        <form>
            <div className="input-field">
                <label className="label-icon"><i className="material-icons">search</i></label>
                <input id="search" type="search" required />
            </div>
        </form>
    )
}

export default SelectCompany;