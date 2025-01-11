import "./CallbackForm.css";
import { RiPhoneFill } from "react-icons/ri";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import { useEffect } from "react";

function CallbackForm() {
  const {
    values,
    handleChange,
    handleKeyDown,
    handleDateChange,
    //errors,
    // isValid,
    resetForm,
    setValues,
    //setIsValid,
    handlePhoneChange,
  } = useFormAndValidation();

  useEffect(() => {
    // Инициализация AirDatepicker
    new AirDatepicker("#input", {
      minDate: Date.now(),
      autoClose: true,
      onSelect: function (formattedDate) {
        setValues({ ...values, date: formattedDate.formattedDate });
      },
    });
  }, [values, setValues]);

  function handleSubmit(e) {
    console.log(values);
    e.preventDefault();
    resetForm();
    document.getElementById("select").value = "";
  }

  return (
    <>
      <form className="callback-form">
        <input
          type="text"
          className="form-input"
          placeholder="Введите ваше имя"
          name="name"
          onChange={handleChange}
          value={values.name || ""}
          required
        ></input>
        <input
          type="tel"
          className="form-input"
          placeholder="Номер телефона"
          name="phone"
          onChange={handlePhoneChange}
          onKeyDown={handleKeyDown}
          maxLength={18}
          value={values.phone || ""}
          required
        ></input>
        <input
          maxLength={10}
          id="input"
          type="text"
          name="date"
          className="form-input calendar"
          placeholder="Выберите дату"
          onChange={handleDateChange}
          autoComplete="off"
          value={values.date || ""}
          required
        ></input>
        <select
          className="form-select"
          name="time"
          onChange={handleChange}
          id="select"
        >
          <option value="">Выберите время</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
        </select>

        <button type="submit" className="form-button" onClick={handleSubmit}>
          Отправить
        </button>

        <div className="callback-icon">
          {<RiPhoneFill className="phone-logo" />}
        </div>
      </form>
    </>
  );
}

export default CallbackForm;
