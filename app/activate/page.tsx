import zagoalLogo from "../Circle Logo.png";
import Image from "next/image";

const Page = () => {
  return (
    <section className="container flex flex-col items-center justify-center h-screen gap-8">
      <div className="w-full md:w-1/2 flex items-center justify-center flex-col">
        <Image
          className="rounded-full w-24 h-24 mb-4"
          src={zagoalLogo}
          alt="zagoal-logo"
        />
        <h1 className="text-3xl font-semibold mb-4">Thank you!</h1>
        <p className="text-center text-black text-lg font-normal">
          We have sent you a verification message to the email address you
          address. Please check your inbox to help us confirm we have your email
          address
        </p>
      </div>
    </section>
  );
};

export default Page

