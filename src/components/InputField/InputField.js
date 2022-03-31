import React from 'react';

const InputField = ({searchMealListener}) => {
    return (
        <input className='form-control my-5 mx-auto w-75' placeholder='Search Meal by Name' onChange={searchMealListener}></input>
    );
};

export default InputField;