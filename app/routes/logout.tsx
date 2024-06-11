import { json, redirect } from "@remix-run/node";
import { destroyUserSection } from "../data/auth.server";

export async function action({ request }: { request: Request }) {
  if (request.method !== "POST") {
    return json({ error: "Invalid request method" }, { status: 400 });
  }

  return await destroyUserSection(request);
}
