import ExpenseForm from "../expense-form/ExpenseForm";

export default function ExpenseFormModal() {
  return (
    <div className="w-dvw h-dvh fixed top-0 left-0 flex items-center justify-end z-50 bg-black bg-opacity-50">
      <div className="flex flex-col w-full items-center justify-center">
        <ExpenseForm />
      </div>
    </div>
  );
}
