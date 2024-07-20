import React from 'react'

export const Result = ({secretNum,term}) => {
    let result;
if(term){
    if(term>secretNum){
        result='Higher';

    }else if(term<secretNum){
        result='Lower';

    }else if(term==secretNum){
        result='Correct';
    }else{
        result='Enter vaid as a number from 1 to 10';
    }
}
  return (
    <h3>You Gussed: {result}</h3>
    
  )
}
export default Result;