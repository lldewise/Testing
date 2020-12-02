import React from 'react'
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

const SearchEngine = () =>{
    return (
    <SearchBox placeholder="Search" onSearch={newValue => console.log('value is ' + newValue)} className="ms-Grid-col lg4" style={{width:'400px'}} />
    );
}
export default SearchEngine;