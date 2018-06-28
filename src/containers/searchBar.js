import React, { Component }from 'react';

import '../index.css';
export default class SearchBar extends Component {
    render() {
        return (
                <form class="form-inline">
                    <label class="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0 col-sm-9" id="inlineFormInput" placeholder="Type a Pokemon Name!" />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        )
    }
}