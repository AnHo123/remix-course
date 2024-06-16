import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addExpense(expenseData, userId) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        note: expenseData.note,
        date: new Date(expenseData.date),
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getExpenses(userId) {
  try {
    const expenses = await prisma.expense.findMany({
      where: { userId },
      orderBy: { date: "desc" },
    });
    return expenses;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getExpense(id) {
  try {
    const expense = await prisma.expense.findFirst({
      where: { id },
    });
    return expense;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateExpense(id, expenseData) {
  try {
    return await prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        note: expenseData.note,
        date: new Date(expenseData.date),
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteExpense(id) {
  try {
    return await prisma.expense.delete({
      where: { id },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
