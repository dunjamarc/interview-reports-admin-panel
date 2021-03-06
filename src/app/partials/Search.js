import React from 'react';

const Search = (props) => {
    return (
        <form>
            <div className="input-field">
                <label className="label-icon"><i className="material-icons">search</i></label>
                <input id="search" type="search" required value={props.inputValue} onChange={props.handleChange} />
            </div>
        </form>
    )
}

export default Search;