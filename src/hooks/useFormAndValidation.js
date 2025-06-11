import { useState, useCallback, useRef } from "react";

export function useFormAndValidation() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });
  const [isValid, setIsValid] = useState(false);

  const validationRules = {
    name: (value) => {
      if (value === "") return "Имя обязательно для заполнения";
      if (value.trim().length < 2)
        return "Имя должно содержать минимум 2 символа";
      if (!/^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(value))
        return "Имя содержит недопустимые символы";
      return null;
    },
    phone: (value) => {
      if (!value || value === "+7 (___) ___-__-__")
        return "Телефон обязателен для заполнения";
      return null;
    },
    date: (value) => {
      if (value === "" || !value || value === "__.__.____" )
        return "Дата обязательна для заполнения";
      if (!/^\d{2}\.\d{2}\.\d{4}$/.test(value))
        return "Некорректный формат даты";
      return null;
    },
    time: (value) => {
      if (!value || value === "") return "Время обязательно для выбора";
      return null;
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validationRules[name](value) }));
    setIsValid(e.target.closest("form").checkValidity());
  };

  const handleAccept = (value, data) => {
    setValues((prev) => ({
      ...prev,
      [data.el.input.name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [data.el.input.name]: validationRules[data.el.input.name](value),
    }));
  };

  const validateForm = () => {
    Object.entries(validationRules).forEach(([field, validateFn]) => {
      //console.log(errors[field] === "", "errors[field]");
      //console.log(validateFn(errors[field]));
      if (errors[field] === "") {
        //console.log(errors[field], "errors[field]");
        setErrors((prev) => ({
          ...prev,
          [field]: validateFn(errors[field]),
        }));
        
      }

      //console.log(field, "field");
      //console.log(typeof validateFn, "validateFn");
    });
    console.log(errors, "errors");
    return errors;
  };

  return {
    values,
    handleChange,
    handleAccept,
    errors,
    isValid,
    setValues,
    setErrors,
    setIsValid,
    validateForm,
  };
}
