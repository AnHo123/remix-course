import { validateCredentials } from "~/data/validation.server";
import AuthForm from "~/views/auth-page/auth-form/AuthForm";
import { login, signup } from "~/data/auth.server";

interface AuthDataType {
  email: string;
  password: string;
}

export default function AuthPage() {
  return <AuthForm />;
}

export async function action({ request }: any) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData) as AuthDataType;

  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }

  try {
    if (authMode === "login") {
      return await login(credentials);
    } else {
      return await signup(credentials);
    }
  } catch (error) {
    console.log(error);

    return error;
  }
}
