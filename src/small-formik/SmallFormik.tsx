import React, { useState } from 'react';

const SmallFormik = (props: any) => {
    const [state, setState] = useState({
        values: {

        }
    });

    const handleChange = (event) => {
        setState((state) => {
            return {
                ...state,
                values: {
                    ...state.values,
                    [event.target.name]: event.target.value
                }
            }
        });
        console.log(state);
    };

    return props.render({
        state: state,
        handleChange: handleChange
    });
};

const MyForm = (props: any) => {
    return (
        <SmallFormik
            render={(formProps) => (
                <div>
                    <input
                        name='name'
                        type='text'
                        value={formProps.state.values.name}
                        onChange={formProps.handleChange}
                    />
                    <br/>
                    <input
                        name='name'
                        type='text'
                        value={formProps.state.values.name}
                        onChange={formProps.handleChange}
                    />
                </div>
            )}
        />
    );
};

export default MyForm;
