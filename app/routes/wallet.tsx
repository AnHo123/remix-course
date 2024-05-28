import WalletPage from "~/views/wallet-page/WalletPage";
import { addExpense, getExpenses } from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";
import { redirect } from "@remix-run/node";

export default function Index() {
  return <WalletPage />;
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  console.log(expenseData);

  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }

  await addExpense(expenseData);
  return redirect("/wallet");
}

export async function loader() {
  const expenses = await getExpenses();
  return expenses;
}
