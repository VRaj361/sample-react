import React from "react";

function InputField({ label, type, iconSrc, iconAlt }) {
  return (
    <>
      <div className="flex gap-1 mt-44 max-w-full whitespace-nowrap w-[292px] max-md:mt-10">
        <label htmlFor={label.toLowerCase()} className="grow pt-3.5 pb-2 bg-white w-fit">
          {label}
        </label>
        <img loading="lazy" src={iconSrc} alt={iconAlt} className="object-contain shrink-0 my-auto w-6 aspect-[0.96]" />
      </div>
      <input
        type={type}
        id={label.toLowerCase()}
        className="shrink-0 mt-2 max-w-full h-px border border-solid border-black border-opacity-40 w-[294px]"
        aria-label={label}
      />
    </>
  );
}

export default InputField;