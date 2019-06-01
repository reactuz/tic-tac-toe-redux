import React from "react";
import { connect } from "react-redux";
import { handleClick } from "../actions.js";
import Square from "./Square.js";

const Board = props => {
  const renderSquare = i => (
    <Square value={props.squares[i]} handleClick={() => props.handleClick(i)} />
  );

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  squares: state.history[state.stepNumber].squares
});

const mapDispatchToProps = dispatch => ({
  handleClick: squareIndex => dispatch(handleClick(squareIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
