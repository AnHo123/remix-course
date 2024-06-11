import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import Button from "~/components/button/Button";
import LockIcon from "~/images/lock.svg";
import UserIcon from "~/images/add-user.svg";

import styles from "~/views/wallet-page/expense-form/ExpenseForm.module.css";

interface ValidationDataType {
  email?: string;
  password?: string;
}

export default function AuthForm() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const validationErrors = useActionData() as ValidationDataType;

  const authMode = searchParams.get("mode");
  const isLoginMode = authMode === "login";

  return (
    <div className="w-full flex items-center justify-center mt-20">
      <div className="max-w-[30rem] w-full flex flex-col items-center justify-center border-2 rounded-xl border-primary pt-8 pb-4 px-10">
        <div className="w-16 mb-3">
          <img
            src={isLoginMode ? LockIcon : UserIcon}
            alt="lock icon"
            className="w-full h-auto"
          />
        </div>
        <div className="text-3xl font-bold mb-14">
          {isLoginMode ? "Login" : "Register"}
        </div>
        <Form
          method="post"
          className="flex flex-col justify-center items-center w-full"
        >
          <div className="flex flex-col gap-5 w-full text-lg mb-10">
            <div className="w-full">
              <input
                className={styles["input"]}
                type="text"
                required
                id="email"
                name="email"
                placeholder="Enter your email"
                minLength={10}
                maxLength={30}
              />
              {validationErrors?.email && (
                <div className="text-red-500 font-bold text-sm">
                  {validationErrors.email}
                </div>
              )}
            </div>
            <div className="w-full">
              <input
                className={styles["input"]}
                type="password"
                id="password"
                name="password"
                required
                minLength={5}
                maxLength={20}
                placeholder="Enter your password"
              />
              {validationErrors?.password && (
                <div className="text-red-500 font-bold text-sm">
                  {validationErrors.password}
                </div>
              )}
            </div>
          </div>
          <Button
            type="submit"
            className="rounded-xl px-5 text-xl py-3 mb-10 min-w-32"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Authenticating..."
              : isLoginMode
              ? "Login"
              : "Register"}
          </Button>
          <div>
            {!isLoginMode
              ? "Already have an account?"
              : "Don’t have an account?"}{" "}
            <Link
              to={isLoginMode ? "/auth?mode=register" : "/auth?mode=login"}
              className="text-primary underline"
            >
              {!isLoginMode ? "Login Now" : "Register Now"}
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
