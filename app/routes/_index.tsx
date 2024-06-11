import type { MetaFunction } from "@remix-run/node";
import { getUserFromSession } from "~/data/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export const loader = async () => {
  const userId = await getUserFromSession();
  return { userId };
};
