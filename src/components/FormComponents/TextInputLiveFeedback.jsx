import { useField } from "formik";
import { useState } from "react";

const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`form-control ${
        showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
      }`}
    >
      <div className="flex items-center space-between">
        <label htmlFor={props.id} className="block text-sm font-medium leading-5 mb-1 text-gray-700">
          {label}
        </label>
      </div>
      <input
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
        className={`form-input block py-2 px-3 border ${(showFeedback && meta.error) ? 'border-red-500' : 'border-gray-300' } rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
      />
      {showFeedback ? (
        <div
          id={`${props.id}-feedback`}
          aria-live="polite"
          className="text-xs text-red-500"
        >
          {meta.error ? meta.error : ''}
        </div>) : null
      }
    </div>
  );
};

export default TextInputLiveFeedback;