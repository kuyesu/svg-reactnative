import { View, Text, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import SvgDoctor from "../assets/images/doctors.svg";
import SvgBarista from "../assets/images/barista.svg";
import SvgShopping from "../assets/images/shopping.svg";
export default function OnboardingScreen() {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#4ef",
          title: "I-TRACK",
          image: <SvgDoctor width={200} height={200} />,
          subtitle: "Healthy care for infants",
        },
        {
          backgroundColor: "#4ef",
          image: <SvgBarista width={200} height={200} />,
          title: "Onboarding 2",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#4ef",
          image: (
            <SvgShopping
              width={200}
              height={200}
              className="w-44 h-44 object-contain"
            />
          ),
          title: "Seamless ",
          subtitle: "Like none other in the world, we bring you the best",
        },
      ]}
    />
  );
}
