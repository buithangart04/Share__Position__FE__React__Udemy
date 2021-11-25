import React, { useReducer ,useEffect} from "react";
import { validate } from "../../../util/validators";
import "./Input.css";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, isValid: validate(action.val,action.validators), value: action.val };
    case "TOUCH":
      return {...state,isTouched:true}
    default:
      return state;
  }
};
const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    isValid: props.initialValid||false,
    value: props.initialValue||'',
    isTouched:false
  });
  const {id ,onInput}= props;
  const {isValid, value} = inputState;

  useEffect(()=>{
    onInput(id,value,isValid);
  }, [id,value,isValid,onInput]);

  const changeHandler = (event) => {
    dispatch({val:event.target.value,type :"CHANGE",validators:props.validators})
  };
  const touchHandler= ()=>{
    dispatch({
      type:"TOUCH"
    })
  }
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={inputState.value}
        onBlur={touchHandler}
        onChange={changeHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.row || 3}
        value={inputState.value}
        onBlur={touchHandler}
        onChange={changeHandler}
      />
    );
  return (
    <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
