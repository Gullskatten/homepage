import React from "react";
import { Link } from "react-router-dom";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <div>
      <div className="bg-slate-100 dark:bg-slate-800">
        <section className="bg-[url('/assets/lowpoly-lg.jpg')] bg-no-repeat bg-center bg-cover h-96 flex items-center justify-center text-white shadow-lg">
          <div className="rounded-md m-4 bg-gradient-to-r bg-clip-padding backdrop-filter backdrop-brightness-75 backdrop-blur-xl ">
            <div className="rounded-t-md p-6 transition-all duration-300">
              <h1 className="md:mb-2 md:text-2xl lg:text-4xl font-bold text-white">
                Norwegian Magic
              </h1>
              <p>
                Dwelve into the depths of the Norwegian forest and discover the
                fjords.
              </p>
            </div>
            <div className="rounded-b-md mb-4 mr-4">
              <div className="flex items-center justify-end">
                <Link
                  to="/stories"
                  className="flex items-center px-3 py-2 space-x-2 font-bold text-white bg-gradient-to-r from-green-600 to-lime-600 rounded-md"
                >
                  <span>Get started</span>{" "}
                  <ChevronDoubleRightIcon className="h-4 w-4 " />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="p-10">
          <h2 className="font-bold text-4xl">Latest News</h2>
          <div className="flex items-center justify-start space-x-2 my-5">
            <article className="rounded-md w-96 shadow-md cursor-pointer group">
              <div className="rounded-t-md duration-300 bg-[url('/assets/autumn-lg.jpg')] bg-no-repeat bg-center bg-cover h-44 group-hover:h-48 transition-all"></div>
              <div className="h-1 bg-gradient-to-r from-cyan-500 to-pink-500" />
              <div className="rounded-b-md bg-white dark:bg-slate-700">
                <div className="p-2">
                  <h3 className="font-bold text-lg">Free React Course 🎉</h3>
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-500 text-xs mb-2">
                    <span>Monday, 20th October 2022</span>
                    <span>Espen G.</span>
                  </div>
                  <p className="text-sm">
                    Familiarize yourself with TypeScript, Tailwind, and Vite. In
                    this course we'll skip the basics, and head straight over to
                    writing production-ready code. 😄
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
