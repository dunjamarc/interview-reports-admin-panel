import React from 'react';

const Search = (props) => {
    return (
        <form>
            <div class="input-field">
                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                <input id="search" type="search" required value={props.inputValue} onChange={props.handleChange} />
            </div>
        </form>
    )
}

export default Search;