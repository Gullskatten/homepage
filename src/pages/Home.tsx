import React from "react";
import { Link } from "react-router-dom";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <div>
      <div className="bg-slate-100 dark:bg-slate-800 p-4">
        <h2 className="font-bold text-4xl">News</h2>
        <div className="flex items-center justify-start space-x-2 my-2">
          <article className="p-5 rounded-md dark:bg-slate-900 bg-slate-200">
            <h3 className="font-bold">2.0.0 released!</h3>
            <p>We're proud to release our newest routes.</p>
          </article>
          <article className="p-5 rounded-md dark:bg-slate-900 bg-slate-200">
            <h3 className="font-bold">2.0.0 released!</h3>
            <p>We're proud to release our newest routes.</p>
          </article>
          <article className="p-5 rounded-md dark:bg-slate-900 bg-slate-200">
            <h3 className="font-bold">2.0.0 released!</h3>
            <p>We're proud to release our newest routes.</p>
          </article>
        </div>
      </div>

      <section className="bg-[url('/assets/woods_droneview-lg.jpg')] bg-no-repeat bg-center bg-cover h-96 flex items-center justify-center shadow-md shadow-slate-900">
        <div className="rounded-md m-4 border border-gray-200">
          <div className="rounded-t-md bg-gradient-to-r bg-clip-padding backdrop-filter backdrop-brightness-75 backdrop-blur-md p-16 transition-all duration-300">
            <h1 className="md:mb-2 md:text-2xl lg:text-4xl font-bold text-white">
              Welcome Home
            </h1>
            <p className="text-white">
              Dwelve into the depths of the Norwegian forest.{" "}
            </p>
          </div>
          <div className="rounded-b-md p-2 bg-gradient-to-r bg-clip-padding backdrop-filter backdrop-brightness-75 backdrop-blur-md hover:backdrop-saturate-50">
            <Link
              to="/stories"
              className="flex space-x-2 font-bold underline items-center justify-end text-white"
            >
              <span>Continue</span>{" "}
              <ChevronDoubleRightIcon className="h-4 w-4 " />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
