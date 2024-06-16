import { useFetcher, useLoaderData } from "@remix-run/react";
import RequireLogin from "~/components/require-login/RequireLogin";
import AnalyseChart, {
  AnalyseChartDataType,
} from "./analyse-chart/AnalyseChart";
import { useEffect, useState } from "react";

interface AnalysePageDataType {
  expenses: AnalyseChartDataType[];
  userId?: string;
}

export default function AnalysePage() {
  const data = useLoaderData<AnalysePageDataType>();
  const fetcher = useFetcher<AnalysePageDataType>();
  const [year, setYear] = useState(new Date().getFullYear().toString());

  if (!data?.userId) return <RequireLogin />;

  if (fetcher.state !== "idle")
    return (
      <div className="min-h-dvh flex items-center justify-center">
        Loading...
      </div>
    );

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const listYear = Array.from({ length: 4 }, (_, i) => currentYear - i);

  const onSelectYear = (e: any) => {
    const year = e.target.value;
    if (!year) return;
    setYear(year);
    fetcher.load(`/analyse?year=${year}`);
  };

  const expenses = fetcher?.data?.expenses
    ? fetcher?.data?.expenses
    : data?.expenses;

  return (
    <div className="py-8 w-full min-h-[50dvh] lg:min-h-[80dvh] flex items-center justify-start flex-col">
      <div className="flex px-10 flex-col justify-center items-center gap-6 mb-7 lg:mb-12 lg:gap-8">
        <div className="font-bold text-2xl text-center lg:text-4xl">
          Annual Expense Overview (Amounts in USD)
        </div>
        <div className="flex items-center justify-center gap-2 text-lg lg:text-2xl">
          <div>YEAR:</div>
          <select
            id="year"
            onChange={(e) => onSelectYear(e)}
            value={year}
            className="border-2 rounded-lg border-primary px-2 py-1 outline-none"
          >
            {listYear.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        {expenses?.length > 0 ? (
          <AnalyseChart data={expenses} />
        ) : (
          <div className="text-center mt-10 border-2 border-primary rounded-md px-10 py-8">
            <div className="text-3xl font-bold">OOPS!!!</div>
            <div className="text-xl">No data found</div>
          </div>
        )}
      </div>
    </div>
  );
}
