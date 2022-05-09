/* eslint-disable import/no-anonymous-default-export */
import { Board } from "./Board";
import { useGameState } from "./GameState";
import { Row, Column } from "./Layout";
import { Log } from "./Log";

function Game() {
  const { gameState, current, xIsNext, winner, handleClick, jumpTo } =
    useGameState();

  return (
    <div style={{ marginTop: 20 }}>
      <Row gap={20}>
        <Column gap={20}>
          <div>
            {winner ? `Winner ${winner}` : `Next Player ${xIsNext ? "X" : "O"}`}
          </div>
          <Board board={current} onClick={handleClick} />
        </Column>
        <Log history={gameState.history} jumpTo={jumpTo} />
      </Row>
    </div>
  );
}

export default Game;
