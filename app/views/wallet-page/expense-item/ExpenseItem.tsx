import { Link, useFetcher } from "@remix-run/react";
import Button from "~/components/button/Button";
import BinIcon from "~/images/bin.svg";
import PencilIcon from "~/images/pencil.svg";

export interface ExpenseDataType {
  id: string;
  title: string;
  amount: number;
  note?: string;
  date: string;
}

interface ExpensePropsDataType {
  data: ExpenseDataType;
}

export default function ExpenseItem({ data }: ExpensePropsDataType) {
  const date = new Date(data?.date).toLocaleDateString();
  const fetcher = useFetcher();

  const handleDeleteExpense = () => {
    const proceed = confirm("Are you sure you want to delete this expense?");

    if (!proceed) return;

    fetcher.submit(null, { method: "delete", action: `/wallet/${data.id}` });
  };

  return (
    <div className="border-2 min-w-80 border-primary h-full rounded-3xl pt-2 pb-6 pr-2 pl-6 w-full max-w-md">
      <div className="flex items-center justify-end gap-2 mb-2">
        <Button className="p-2.5 rounded-md" onClick={handleDeleteExpense}>
          <img src={BinIcon} alt="bin icon" className="w-4 h-auto" />
        </Button>
        <Link to={`/wallet/${data.id}`}>
          <Button className="p-2.5 rounded-md">
            <img src={PencilIcon} alt="bin icon" className="w-4 h-auto" />
          </Button>
        </Link>
      </div>
      <div className="font-bold text-2xl text-primary capitalize text-center mb-2">
        {data?.title}
      </div>
      <div className="text-lg text-dark-grey flex flex-col gap-1">
        <div>
          <span className="font-bold mr-1">Amount:</span> ${data?.amount}
        </div>
        <div>
          <span className="font-bold mr-1">Date:</span> {date}
        </div>
        {data?.note && (
          <div className="leading-tight line-clamp-2">
            <span className="font-bold mr-1">Note:</span>
            {data.note}
          </div>
        )}
      </div>
    </div>
  );
}
