import Button from "~/components/button/Button";
import Banner from "../../images/banner.png";
import CardThumbnail from "../../images/card-thumnail.png";
import { Link, useLoaderData } from "@remix-run/react";

export default function HomePage() {
  const data = useLoaderData() as { userId: string | undefined };

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <img src={Banner} alt="banner" className="w-full h-auto" />
      <div className="w-11/12 mb-8 mt-6 flex flex-col items-center justify-center lg:mt-12 lg:mb-14">
        <div className="w-full text-center text-primary font-bold text-2xl uppercase mb-4 italic lg:mb-8 lg:text-3xl">
          Let Us Simplify Your Expense Management Journey!
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 mb-4 lg:mb-8">
          <div className="border-2 border-primary rounded-xl flex flex-col items-center justify-center text-center w-full max-w-96">
            <img
              src={CardThumbnail}
              alt="card-thumbnail"
              className="w-full h-auto object-cover"
            />
            <div className="px-3 pb-4 lg:px-5 lg:pb-10 lg:pt-2">
              <div className="text-accent-yellow text-xl font-bold mb-2.5 lg:text-2xl lg:mb-4">
                STORE
              </div>
              <div>
                Seamless Expense Tracking: Record your expenditures on-the-go
                with a user-friendly interface, ensuring you never miss a
                transaction.
              </div>
            </div>
          </div>
          <div className="border-2 border-primary rounded-xl flex flex-col items-center justify-center text-center w-full max-w-96">
            <img
              src={CardThumbnail}
              alt="card-thumbnail"
              className="w-full h-auto object-cover"
            />
            <div className="px-3 pb-4 lg:px-5 lg:pb-10 lg:pt-2">
              <div className="text-accent-yellow text-xl font-bold mb-2.5 lg:text-2xl lg:mb-4">
                ANALYSE
              </div>
              <div>
                Seamless Expense Tracking: Record your expenditures on-the-go
                with a user-friendly interface, ensuring you never miss a
                transaction.
              </div>
            </div>
          </div>
          <div className="border-2 border-primary rounded-xl flex flex-col items-center justify-center text-center w-full max-w-96">
            <img
              src={CardThumbnail}
              alt="card-thumbnail"
              className="w-full h-auto object-cover"
            />
            <div className="px-3 pb-4 lg:px-5 lg:pb-10 lg:pt-2">
              <div className="text-accent-yellow text-xl font-bold mb-2.5 lg:text-2xl lg:mb-4">
                FREE TRIAL
              </div>
              <div>
                Seamless Expense Tracking: Record your expenditures on-the-go
                with a user-friendly interface, ensuring you never miss a
                transaction.
              </div>
            </div>
          </div>
        </div>
        <Link to={data?.userId ? "/wallet" : "/auth?mode=signup"}>
          <Button className="lg:text-xl">
            {!data?.userId ? "Sign Up Now!" : "Create Your Expense Now!"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
