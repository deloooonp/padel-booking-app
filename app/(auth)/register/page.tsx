import { Metadata } from "next";
import { RegisterForm } from "./_components/RegisterForm";

export const metadata: Metadata = {
  title: "Register | PadelHub",
  description: "Create an account to book courts and join the community.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
