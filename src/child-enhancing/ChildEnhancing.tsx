import React from 'react';
import {Wizard,Step} from './Wizard';

const ChildEnhancing = (props: any) => {
    return (
        <Wizard>
            <Step>This is Step 1</Step>
            <Step>This is Step 2</Step>
            <Step>This is Step 3</Step>
        </Wizard>
     );
};

export default ChildEnhancing;
