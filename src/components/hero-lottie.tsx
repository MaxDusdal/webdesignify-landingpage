// app/components/MyLottieComponent.tsx

"use client";

import animationDataDesktop from "@/../public/lottie/hero-lottie.json";
import animationDataMobile from "@/../public/lottie/hero-lottie-mobile.json";
import { useLottie } from "lottie-react";

export const MyLottieComponentDesktop = () => {
  const defaultOptions = {
    animationData: animationDataDesktop,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div className="">
        <div className="w-full">{View}</div>
      </div>
    </>
  );
};

export const MyLottieComponentMobile = () => {
  const defaultOptions = {
    animationData: animationDataMobile,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div className="">
        <div className="w-full">{View}</div>
      </div>
    </>
  );
};

export const MyLottieComponentDynamic = () => {
  return (
    <>
      <div className="hidden lg:block">
        <MyLottieComponentDesktop />
      </div>
      <div className="lg:hidden">
        <MyLottieComponentMobile />
      </div>
    </>
  );
};
