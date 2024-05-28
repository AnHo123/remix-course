import Button from "~/components/button/Button";
import BinIcon from "~/images/bin.svg";
import PencilIcon from "~/images/pencil.svg";

export interface ExpenseDataType {
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

  return (
    <div className="border-2 min-w-80 border-primary rounded-3xl pb-6 pt-8 px-6 w-full max-w-md relative">
      <div className="absolute top-2 right-4 flex items-center justify-end gap-2">
        <Button className="p-2.5 rounded-md">
          <img src={BinIcon} alt="bin icon" className="w-4 h-auto" />
        </Button>
        <Button className="p-2.5 rounded-md">
          <img src={PencilIcon} alt="bin icon" className="w-4 h-auto" />
        </Button>
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
