import React, {Component} from 'react'
import Cell from './Cell'

export default class Game extends Component {
    constructor(){
        super();
        this.rows = [['X','O','X'],['X','O','X'],['X','O','X']]
    }
    render() {
        var renderRow = (r)=>r.map((c)=>{return (<Cell token={c}></Cell>);});
        var renderCells = (c)=>c.map(r=>{return (<tr>{renderRow(r)}</tr>)});
        return (
            <table className="table table-bordered">
                <tbody>
                {renderCells(this.rows)}

                </tbody>
            </table>
        )
    }
}