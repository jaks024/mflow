import React from "react";

class GridCell extends React.Component {

    static cellId = 0;
    static newCellId() {
        this.cellId++;
        return this.cellId;
    }

    render() {
        return (
            <div className= {this.props.isDate ? "grid-cell grid-cell-date" : "grid-cell"}>
                {this.props.value}
            </div>
        );
    }
}

export default GridCell;