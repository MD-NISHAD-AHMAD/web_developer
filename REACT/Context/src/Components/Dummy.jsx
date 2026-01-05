import { useContext } from "react";

import { ContextCreate } from "../Context/CounterProvider";

export const Dummy = () => {
    const { dummy, setDummy } = useContext(ContextCreate);

    const handleInc = () => {
        setDummy((prev) => prev + 1);
    };

    const handleDec = () => {
        setDummy(prev => (prev > 0 ? prev - 1 : 0));
    };

    return (
        <>
        <h1>Counter Dummy Child {dummy}</h1>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec} disabled={dummy === 0}
              >Decrement</button>
        </>
    );
};