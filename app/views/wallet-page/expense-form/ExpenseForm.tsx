import { Form, useActionData, useNavigation } from "@remix-run/react";
import styles from "./ExpenseForm.module.css";
import Button from "~/components/button/Button";

interface ValidationDataType {
  title?: string;
  amount?: string;
  date?: string;
}

export default function ExpenseForm() {
  const validationErrors = useActionData() as ValidationDataType;
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  return (
    <div className="w-full flex flex-col justify-center items-center border-2 rounded-xl border-primary max-w-[30rem] py-8 px-10">
      <div className="font-bold text-dark-grey text-2xl mb-5">ADD EXPENSE</div>
      <Form
        className="w-full flex flex-col justify-center items-end"
        method="post"
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
              id="date"
              name="date"
              placeholder="Enter your expense date"
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
            />
          </div>
        </div>
        <Button type="submit" className="rounded-xl px-5 text-xl py-3 self-end">
          {isSubmitting ? "Submiting..." : " Add Expense"}
        </Button>
      </Form>
    </div>
  );
}
