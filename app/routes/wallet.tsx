import WalletPage from "~/views/wallet-page/WalletPage";
import { getExpenses } from "~/data/expenses.server";
import { Outlet } from "@remix-run/react";

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

export async function loader() {
  const expenses = await getExpenses();
  return expenses;
}
