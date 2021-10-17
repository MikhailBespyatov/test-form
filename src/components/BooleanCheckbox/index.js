import React, { useState } from "react";

export const BooleanCheckbox = ({
  defaultChecked = false,
  onChange,
  name = "name",
  label,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const onCheckboxChange = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <label>
      <input type="checkbox" name={name} onChange={onCheckboxChange} />
      {label}
    </label>
  );
};
