import Button from "~/components/button/Button";
import ExpenseItem, { ExpenseDataType } from "./expense-item/ExpenseItem";
import { Link, useLoaderData } from "@remix-run/react";

interface WalletPageDataType {
  expenses: ExpenseDataType[];
  userId?: string;
}

export default function WalletPage() {
  const data = useLoaderData() as WalletPageDataType;

  if (!data?.userId)
    return (
      <div>
        <h1 className="text-3xl font-bold">
          You need to be logged in to view this page
        </h1>
        <Link to="/auth?mode=login">
          <Button>Login Now</Button>
        </Link>
      </div>
    );

  return (
    <div className="flex items-center justify-center">
      <div className="w-11/12 max-w-6xl flex flex-col items-center justify-center gap-8 py-10">
        <Link to="/wallet/add" className="self-end">
          <Button>Add Expense</Button>
        </Link>
        {data?.expenses.length < 1 ? (
          <div>
            <h1 className="text-3xl font-bold">No expenses found</h1>
            <p className="text-lg">
              Click on the button above to add a new expense
            </p>
          </div>
        ) : (
          <div className="grid-cols-1 w-full md:grid-cols-2 content-between justify-items-center grid lg:grid-cols-3 lg:gap-7 gap-5 auto-rows-fr">
            {data?.expenses?.map((item, index) => (
              <ExpenseItem data={item} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
