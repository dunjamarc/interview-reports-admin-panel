import React from 'react';

const Search = (props) => {
    return (
        <div className="container search">
            <form className="col m4">
                <div className="row">
                    <div className="input-field col s4">
                        <i className="material-icons prefix">search</i>
                        <input type="text" value={props.inputValue} onChange={props.handleChange}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search;