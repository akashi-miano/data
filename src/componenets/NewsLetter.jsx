import React from "react";

const NewsLetter = () => {
  return (
    <section className="news-letter bg-black text-white p-8 md:p-16">
      <div className="wrapper container mx-auto grid md:grid-cols-2">
        <header className="flow-content--m mb-4 text-center md:text-left">
          <h3 className="text-4xl font-bold">
            Want tips & tricks to optimize your flow?
          </h3>
          <p className="font-bold text-md">
            Sign up to our newsletter and stay up to date
          </p>
        </header>
        <form
          className="flow-content--m md:flow-content--m text-center md:text-left"
          action=""
        >
          <div className="wrapper flex items-center justify-between gap-4">
            <input
              className="w-full rounded-md p-3 text-black"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="btn inline-block min-w-[150px] text-black bg-[#00df9a] py-4 px-8 text-sm rounded-md"
              type="submit mx-auto"
            >
              Notify me
            </button>
          </div>
          <p className="text-center md:text-left">
            We care about protection of your data. Read our{" "}
            <a className="text-[#00df9a] underline" href="">
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
