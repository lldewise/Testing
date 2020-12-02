import * as React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';




/* eslint-disable react/jsx-no-bind */
const FluentUISearchBox = () => {
    return (
        <div>
            <div className="fluenttitle divpadt10">Searchbox</div>
            <div className="divpadt10">
                <div className="divpadt10">
                    <SearchBox placeholder="Search" onSearch={newValue => console.log('value is ' + newValue)} />
                </div>
                <div className="divpadt10">
                <SearchBox
                    placeholder="Search with no animation"
                    onSearch={newValue => console.log('value is ' + newValue)}
                    disableAnimation
                /></div>

            </div>
        </div>
    );
};

export default FluentUISearchBox;
