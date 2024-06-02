import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import styles from "./ExpenseForm.module.css";
import Button from "~/components/button/Button";
import { useRef } from "react";
import { ExpenseDataType } from "../expense-item/ExpenseItem";

interface ValidationDataType {
  title?: string;
  amount?: string;
  date?: string;
}

interface ExpenseFormProps {}

export default function ExpenseForm(props: ExpenseFormProps) {
  const validationErrors = useActionData() as ValidationDataType;
  const expenseData = useLoaderData() as ExpenseDataType;
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const formRef = useRef<HTMLFormElement>(null);

  const defaultValues = expenseData
    ? {
        title: expenseData?.title,
        amount: expenseData?.amount,
        date: expenseData?.date?.slice(0, 10),
        note: expenseData?.note,
      }
    : {
        title: "",
        amount: "",
        date: "",
        note: "",
      };

  return (
    <div className="w-full flex flex-col justify-center items-center border-2 rounded-xl bg-white border-primary max-w-[30rem] py-8 px-10">
      <div className="font-bold text-dark-grey text-2xl mb-5">ADD EXPENSE</div>
      <Form
        ref={formRef}
        className="w-full flex flex-col justify-center items-end"
        method={expenseData ? "patch" : "post"}
      >
        <div className="flex flex-col gap-5 w-full text-lg mb-8">
          <div className="w-full">
            <div className="w-full">
              <input
                className={styles["input"]}
                type="text"
                required
                id="title"
                name="title"
                placeholder="Enter your expense title"
                minLength={1}
                maxLength={30}
                defaultValue={defaultValues.title}
              />
              {validationErrors?.title && (
                <div className="text-red-500 font-bold text-sm">
                  {validationErrors?.title}
                </div>
              )}
            </div>
          </div>
          <div className="w-full">
            <input
              className={styles["input"]}
              type="number"
              required
              id="amount"
              name="amount"
              min="0"
              step="0.01"
              placeholder="Enter your expense value"
              defaultValue={defaultValues.amount}
            />
            {validationErrors?.amount && (
              <div className="text-red-500 font-bold text-sm">
                {validationErrors?.amount}
              </div>
            )}
          </div>
          <div className="w-full">
            <input
              className={styles["input"]}
              type="date"
              required
              max={new Date().toISOString().slice(0, 10)}
              id="date"
              name="date"
              placeholder="Enter your expense date"
              defaultValue={defaultValues.date}
            />
            {validationErrors?.date && (
              <div className="text-red-500 font-bold text-sm">
                {validationErrors?.date}
              </div>
            )}
          </div>
          <div className="w-full">
            <input
              className={styles["input"]}
              type="text"
              id="note"
              name="note"
              placeholder="Enter your expense note"
              minLength={1}
              maxLength={50}
              defaultValue={defaultValues.note}
            />
          </div>
        </div>
        <div className="seft-end flex gap-3">
          <Link to="/wallet">
            <Button
              disabled={isSubmitting}
              className={`rounded-xl px-5 text-xl py-3 ${styles["btn-cancel"]}`}
            >
              Cancel
            </Button>
          </Link>
          <Button type="submit" className="rounded-xl px-5 text-xl py-3">
            {isSubmitting ? "Submiting..." : "Save"}
          </Button>
        </div>
      </Form>
    </div>
  );
}
