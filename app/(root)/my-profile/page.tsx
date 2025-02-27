import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
          redirect("/sign-in");
        }}
        className="mb-10"
      >
        <button className="">Logout</button>
      </form>
    </>
  );
};

export default page;
