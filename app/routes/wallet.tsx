import WalletPage from "~/views/wallet-page/WalletPage";
import { getExpenses } from "~/data/expenses.server";
import { Outlet } from "@remix-run/react";
import { getUserFromSession } from "~/data/auth.server";

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

export async function loader({ request }: any) {
  const [expenses, userId] = await Promise.all([
    getExpenses(),
    getUserFromSession(request),
  ]);

  return { expenses: [], userId: userId };
}
