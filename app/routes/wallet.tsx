import WalletPage from "~/views/wallet-page/WalletPage";
import { getExpenses } from "~/data/expenses.server";
import { Outlet } from "@remix-run/react";
import { getUserFromSession } from "~/data/auth.server";
import { LoaderFunctionArgs } from "@remix-run/node";

export default function Index() {
  return (
    <>
      <Outlet />
      <main>
        <WalletPage />
      </main>
    </>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await getUserFromSession(request);
  const expenses = userId ? await getExpenses(userId) : [];

  return { expenses: expenses, userId: userId };
}
