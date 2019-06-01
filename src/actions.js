export const HANDLE_CLICK = "HANDLE_CLICK";
export const JUMP_TO = "JUMP_TO";

export const handleClick = squareIndex => ({ type: HANDLE_CLICK, squareIndex });

export const jumpTo = stepIndex => ({ type: JUMP_TO, stepIndex });
