import { Metadata } from "next";
import { useForm } from "react-hook-form"

export const metadata: Metadata = {
	title: 'Register',
};

export default function Register() {
  const {register} = useForm()

  return (
    <div>
      <h1>Registrar</h1>
      <form action="">
        <input type="text" />
        <input type="email" />
        <input type="password" />
        <input type="confirmPassword" />

        <button>Register</button>
      </form>
    </div>
  )
}