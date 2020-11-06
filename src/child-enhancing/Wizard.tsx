import React, { useState } from 'react';

export const Wizard = ({ children }) => {
    const [step, setStep] = useState(0);
    return (
        <div>
            {
                React.Children.toArray(children).reduce(
                    (accumulator: any[], child: any, index: number) => {
                        return index > step ? accumulator :
                            [
                                ...accumulator,
                                React.cloneElement(child, {
                                    onComplete: () => setStep(index + 1)
                                })
                            ];
                    }, []
                )
            }
        </div>

    );
};

export const Step = (props:any) => {
    return (
        <div>
            {props.children}
            <button onClick={props.onComplete}>Next Step</button>
        </div>
    );
};
