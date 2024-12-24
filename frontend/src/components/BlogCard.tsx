import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="flex flex-col justify-center text-sm">
            <Avtar size={"small"} name={authorName} />
          </div>
          <div className="font-thin pl-2 flex flex-col justify-center">
            {authorName}
          </div>
          <div className="text-xs flex flex-col justify-center pl-2">
            <Circle />
          </div>
          <div className="pl-2 font-extralight text-slate-500 text-sm flex flex-col justify-center">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin">
          {content.length > 100 ? content.slice(0, 100) + "...." : content}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(
          content.length / 100
        )} minute(s)`}</div>
      </div>
    </Link>
  );
};

export function Avtar({
  name,
  size,
}: {
  name: string;
  size: "large" | "small";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "large" ? "w-10 h-10" : "w-6 h-6"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span className="text-xs text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-600 "></div>;
}
