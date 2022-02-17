import React from "react";
import GridCell from "./GridCell";
import "./Grid.css"

class GridRow extends React.Component {

    static rowId = 0;
    static newRowId() {
        this.rowId++;
        return this.rowId;
    }

    renderCells(columnRow) {
        return columnRow.map((val, i) => {
            if (val === null) {
                return <GridCell key={GridCell.newCellId()  + "-cell" } value={null} isDate={false} />;
            } else {
                if (i === 0) {
                    return <GridCell key={GridCell.newCellId() + "-cell" } value={val} isDate={true}/>;
                } else {
                    return <GridCell key={GridCell.newCellId() + "-cell" } value={val} isDate={false}/>;
                }
            }
        });
    }

    render() {
        return (
            <div className={this.props.isHeaderRow ? "grid-row grid-header-row": "grid-row" }>
                {this.renderCells(this.props.rowContent)}
            </div>
        );
    }
}

export default GridRow;