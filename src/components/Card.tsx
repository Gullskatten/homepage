import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import Divider from "./Divider";
import { formatRelative } from "date-fns";

type CardProps = {
  title: string;
  author: string;
  timestamp: number;
  description: string;
  url: string;
};

function Card({
  title,
  author,
  timestamp,
  description,
  to,
  url,
}: CardProps & LinkProps) {
  return (
    <Link
      to={to}
      className="bg-white dark:bg-slate-700 rounded-md shadow-md cursor-pointer hover:shadow-lg transition-all border border-slate-300 dark:border-none dark:hover:shadow-slate-900"
    >
      <img
        aria-label="Card image"
        src={url}
        className={`block object-cover w-full rounded-t-md duration-300 bg-no-repeat bg-cover h-44`}
      />
      <Divider />
      <div className="rounded-b-md">
        <article className="p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-500 text-xs mb-2">
            <span>Posted {formatRelative(timestamp, new Date())}</span>
            <span>{author}</span>
          </div>
          <p className="text-sm">{description}</p>
        </article>
      </div>
    </Link>
  );
}

export default Card;
