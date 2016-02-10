/**
 * @license Copyright (c) 2016, zangrafx
 * For licensing, see LICENSE
 */

"use strict";

import React from "react";

export default React.createClass({
    "getDefaultProps": function () {
        return {
            "setFilterValue": React.PropTypes.func.isRequired
        };
    },
    "handleChange": function (evt) {
        this.props.setFilterValue(evt.target.value);
    },
    "render": function () {

        return (
            <div className="SearchPanel">
                Filter: <input type="text" onChange={evt => this.handleChange(evt)} />
            </div>
        );
    }
});
