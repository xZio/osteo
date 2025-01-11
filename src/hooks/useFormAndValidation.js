import { useState, useCallback } from "react";
import isEmail from "validator/lib/isEmail";

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const getInputNumberValue = (input) => {
    return input.value.trim().replace(/\D/g, "");
  };

  const handleKeyDown = (e) => {
    const input = e.target;
    if (e.keyCode === 8 && getInputNumberValue(input).length === 1) {
      input.value = "";
    }
  };

  let handleDateChange = function (e) {
    const input = e.target;
    const name = e.target.name;
    let dateNumbers = getInputNumberValue(input);
    let formattedDateValues = "";

    if (!dateNumbers) {
      input.value = "";
    }
    if (input.value.length !== input.selectionStart) {
      if (e.nativeEvent.data && /\D/g.test(e.nativeEvent.data)) {
        input.value = dateNumbers;
      }
      setValues({ ...values, [name]: input.value });
      return;
    }

    if (dateNumbers.length >= 1) {
      formattedDateValues = dateNumbers.substring(0, 2);
    }
    if (dateNumbers.length > 2) {
      formattedDateValues += "." + dateNumbers.substring(2, 4);
    }
    if (dateNumbers.length > 4) {
      formattedDateValues += "." + dateNumbers.substring(4, 8);
    }
    input.value = formattedDateValues;
    setValues({ ...values, [name]: input.value });
  };

  let handlePhoneChange = function (e) {
    const input = e.target;
    const name = e.target.name;
    let phoneNumbers = getInputNumberValue(input);
    let formattedInputValue = "";

    if (!phoneNumbers) {
      input.value = "";
    }

    if (input.value.length !== input.selectionStart) {
      if (e.nativeEvent.data && /\D/g.test(e.nativeEvent.data)) {
        input.value = phoneNumbers;
      }
      setValues({ ...values, [name]: input.value });
      return;
    }

    if (["7", "8", "9"].includes(phoneNumbers[0])) {
      if (phoneNumbers === "9") {
        phoneNumbers = "7" + phoneNumbers;
      }
      let firstSymbols = phoneNumbers[0] === "8" ? "8 (" : "+7 (";
      if (phoneNumbers.length >= 1) {
        formattedInputValue = firstSymbols + phoneNumbers.substring(1, 4);
      }

      if (phoneNumbers.length >= 5) {
        formattedInputValue += ") " + phoneNumbers.substring(4, 7);
      }
      if (phoneNumbers.length >= 8) {
        formattedInputValue += "-" + phoneNumbers.substring(7, 9);
      }
      if (phoneNumbers.length >= 10) {
        formattedInputValue += "-" + phoneNumbers.substring(9, 11);
      }
      input.value = formattedInputValue;
    }
    if (["0", "1", "2", "3", "4", "5", "6"].includes(phoneNumbers[0])) {
      input.value = "+" + phoneNumbers;
    }

    setValues({ ...values, [name]: input.value });
  };

  const handleChange = (e) => {
    const input = e.target;
    let { name, value } = e.target;

    if (name === "email") {
      if (!isEmail(value)) {
        input.setCustomValidity("Некорректый адрес электронной почты.");
      } else {
        input.setCustomValidity("");
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    handleDateChange,
    handlePhoneChange,
    handleKeyDown,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}
