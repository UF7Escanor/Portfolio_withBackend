import React from "react";

type BLog = {
  title: string;
  image: string;
  data: string;
};
type PersonalBlogProps = {
  blogs: BLog[];
  isLoggedIn: Boolean;
  onLoginClick: () => void;
};
const PersonalBlogs: React.FC<PersonalBlogProps> = ({
  blogs,
  isLoggedIn,
  onLoginClick,
}) => {
  const Navigate = onLoginClick;
  return (
    <section className="h-screen ">
      {!isLoggedIn && (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <p className="text-gray-400 mb-4">
            Please log in to view personal blogs
          </p>
          <button
            onClick={Navigate}
            className="px-6 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 transition"
          >
            Login
          </button>
        </div>
      )}
      {blogs.map((blog) => (
        <article
          key={blog.title}
          className="rounded-xl border border-white/10 overflow-hidden hover:scale-[1.02] transition"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="h-48 w-full object-cover"
          />

          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-400 line-clamp-3">{blog.data}</p>
          </div>
        </article>
      ))}
    </section>
  );
};
export default PersonalBlogs;
