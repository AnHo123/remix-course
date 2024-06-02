import Button from "~/components/button/Button";
import ExpenseItem, { ExpenseDataType } from "./expense-item/ExpenseItem";
import { Link, useLoaderData } from "@remix-run/react";

export default function WalletPage() {
  const data = useLoaderData() as ExpenseDataType[];

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-8 py-10">
        <Link to="/wallet/add" className="self-end">
          <Button>Add Expense</Button>
        </Link>
        <div className="grid-cols-1 w-full md:grid-cols-2 content-between grid lg:grid-cols-3 lg:gap-7 gap-5 auto-rows-fr">
          {data?.map((item, index) => (
            <ExpenseItem data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
