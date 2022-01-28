import React from "react";

class GridCell extends React.Component {

    render() {
        return (
            <div key={this.props.cellId}>
                {this.props.value}
            </div>
        );
    }
}

export default GridCell;