const InputDisabledFieldComponent = ({
  labelName,
  inputType,
  inputName,
  inputValue,
}) => {
  return (
    <div className="form-control">
      <label>{labelName}</label>
      <input type={inputType} name={inputName} value={inputValue} disabled />
    </div>
  );
};

export default InputDisabledFieldComponent;
