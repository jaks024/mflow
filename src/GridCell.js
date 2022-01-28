import React from "react";

class GridCell extends React.Component {

    render() {
        return (
            <div>
                {this.props.value}
            </div>
        );
    }
}

export default GridCell;