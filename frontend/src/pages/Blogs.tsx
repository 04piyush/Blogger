import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center ">
        <div className="">
          {blogs.map((blog, index) => {
            return (
              <BlogCard
                id={blog.id}
                authorName={blog.author.name || "Ananomous"}
                title={blog.title}
                content={blog.content}
                publishedDate={"2nd Feb 2024"}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
