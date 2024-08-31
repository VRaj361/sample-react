import React from 'react'
import Logo from "./Logo";
import OneIDIndicator from "./OneIDIndicator";
import VerifyButton from "./VerifyButton";

const VivaLoginAuthentication = () => {
  return (
    <div>
        <section className="bg-orange-50 flex relative flex-col self-center pt-9 pb-20 mt-20 mb-0 max-w-full text-base text-black bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[458px] max-md:mt-10 max-md:mb-2.5">
        <Logo />
        <hr className="shrink-0 mt-8 h-0 border border-solid border-black border-opacity-40 max-md:max-w-full" />
        <div className="flex flex-col px-20 mt-2 w-full max-md:px-5 max-md:max-w-full">
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/42d69de02787e547f97c75ccaf8995a32544272551dc7c1d73b7b3a678a90d71?placeholderIfAbsent=true&apiKey=ab3c43d981ed4dfe8975ab5bc9a48b20"
            alt="User avatar"
            className="object-contain self-center max-w-full aspect-square rounded-[35px] w-[106px]"
            />
            <p className="self-center text-center">Enter a code</p>
            <OneIDIndicator />
            <p className="self-start mt-7 text-center">
            Enter code from Okta Verify app
            </p>
            <form>
            <label
                htmlFor="verificationCode"
                className="self-start mt-8 text-lg text-black text-opacity-40 max-md:ml-1"
            >
                Code
            </label>
            <input
                type="text"
                id="verificationCode"
                className="w-full mt-3.5 max-w-full h-px border border-solid border-black border-opacity-40 max-md:ml-1"
                aria-label="Verification code"
            />
            <VerifyButton />
            </form>
        </div>
        </section>
    </div>
  )
}

export default VivaLoginAuthentication