import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
        <nav className="py-4 px-6 flex justify-start items-center">
          <Link href={"/"}>
            <h1 className="text-3xl font-bold">
              Content<span className="text-teal-500">Craft</span>
            </h1>
          </Link>
        </nav>
        <div className="flex justify-center items-center min-h-[80vh]">
          <SignIn path="/sign-in" />
        </div>
      </div>
    </>
  );
}
