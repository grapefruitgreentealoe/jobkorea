import React from "react";
import Navbar from "./Join/UI/Navbar";
import JoinFormSection from "./Join/ui/formComponents/JoinFormSection";
import AgreementSection from "./Join/ui/agreementComponents/AgreementSection";
import PersonalInfoSection from "./Join/ui/PersonalInfoSection";
import SubmitButton from "./Join/ui/SubmitButton";
export default function Join() {
  return (
    <div>
      <Navbar />
      <JoinFormSection />
      <AgreementSection />
      <PersonalInfoSection />
      <SubmitButton />
    </div>
  );
}
