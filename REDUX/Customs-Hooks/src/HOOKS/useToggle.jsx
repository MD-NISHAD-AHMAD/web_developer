import { useState } from 'react';

export const useToggle = (incomVal) => {
    const [value, setValue] = useState(incomVal);

    function toogleValue(val) {
        if (typeof val != 'boolean') {
            setValue(!val);

        } else {
            setValue(val);
        }
    }

    return [value, toogleValue];
};