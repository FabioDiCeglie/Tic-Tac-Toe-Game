import { BoardState } from "./GameState";

type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};
export function Log(props: LogProps) {
  return (
    <ol>
      {props.history.map((_, i) => {
        return (
          <li key={i}>
            <button onClick={() => props.jumpTo(i)}>
              Go to {i === 0 ? "start" : `move ${i}`}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
