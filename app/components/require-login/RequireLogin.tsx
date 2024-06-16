import { Link } from "@remix-run/react";
import Button from "../button/Button";

export default function RequireLogin() {
  if (typeof window === "undefined") return null;
  return (
    <div className="w-full flex items-center justify-center my-7 lg:my-10 min-h-[50vh]">
      <div className="flex flex-col items-center justify-center w-4/5 text-center gap-5 lg:gap-8">
        <h1 className="text-xl lg:text-3xl">
          You need to be logged in to view this page!
        </h1>
        <Link to={`/auth?mode=login&redirectPath=${window.location.pathname}`}>
          <Button>Login Now!</Button>
        </Link>
      </div>
    </div>
  );
}
