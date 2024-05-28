import Button from "~/components/button/Button";
import ExpenseItem, { ExpenseDataType } from "./expense-item/ExpenseItem";
import ExpenseForm from "./expense-form/ExpenseForm";
import { useLoaderData } from "@remix-run/react";

export default function WalletPage() {
  const data = useLoaderData() as ExpenseDataType[];

  return (
    <div className="flex items-center justify-center">
      <div className="w-4/5 max-w-6xl flex flex-col items-center justify-center gap-8 pt-10">
        <ExpenseForm />
        <Button className="self-end">Add Expense</Button>
        <div className="grid grid-cols-2 gap-5 auto-rows-fr">
          {data?.map((item, index) => (
            <ExpenseItem data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
