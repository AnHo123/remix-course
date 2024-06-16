import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { requireUserSection } from "~/data/auth.server";
import { addExpense } from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";
import ExpenseFormModal from "~/views/wallet-page/expense-form-modal/ExpenseFormModal";

export default function AddExpensePage() {
  return <ExpenseFormModal />;
}

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserSection(request);
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }

  await addExpense(expenseData, userId);
  return redirect("/wallet");
}
