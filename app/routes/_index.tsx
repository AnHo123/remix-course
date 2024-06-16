import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { getUserFromSession } from "~/data/auth.server";
import HomePage from "~/views/home-page/HomePage";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <HomePage />;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userId = await getUserFromSession(request);

  return { userId };
};
