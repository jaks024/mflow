import React from "react";
import GridCell from "./GridCell";

class GridColumn extends React.Component {

    renderCells(columnContent) {
        return columnContent.map(val => {
            return <GridCell key={val + "-cell" } value={val} />;
        });
    }

    render() {
        return (
            <div>
                {this.renderCells(this.props.columnContent)}
            </div>
        );
    }
}

export default GridColumn;