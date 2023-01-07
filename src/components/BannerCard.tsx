import React from "react";
import { Link } from "react-router-dom";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

type BannerCardProps = {
  title: string;
  description: string;
  buttonText: string;
  to: string;
};

function BannerCard({
  title,
  description,
  buttonText,
  to,
}: BannerCardProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="rounded-md m-4 bg-gradient-to-r bg-clip-padding backdrop-filter backdrop-blur-md">
      <div className="rounded-t-md p-6 transition-all duration-300">
        <h1 className="md:mb-2 md:text-2xl lg:text-4xl font-bold text-white">
          {title}
        </h1>
        <p>{description}</p>
      </div>
      <div className="rounded-b-md mb-4 mr-4">
        <div className="flex items-center justify-end">
          <Link
            to={to}
            className="flex items-center px-3 py-2 space-x-2 font-bold text-white bg-gradient-to-r from-green-600 to-lime-600 rounded-md"
          >
            <span>{buttonText}</span>{" "}
            <ChevronDoubleRightIcon className="h-4 w-4 " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerCard;
