import { Metadata } from "next";
import { LoginForm } from "./_components/LoginForm";

export const metadata: Metadata = {
  title: "Login | PadelHub",
  description:
    "Sign in to your player account to book courts and join tournaments.",
};

export default function LoginPage() {
  return <LoginForm />;
}
