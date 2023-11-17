import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

import { db } from "../../fireBaseConfig";
import { Blog, BlogConvert } from "../../typeGlobal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const blog = [
  {
    author: "",
    content: "",
    link: "",
    datetime: {
      seconds: 1391,
    },
    thumbnail: "",
    tittle: "",
  },
];

export const ListBlog = () => {
  const [listBlog, setListBlog] = useState<any>([blog]);

  const handleDelteBlog = () => {};
  useEffect(() => {
    const getAllData = async () => {
      const docRef = doc(db, "/listBlog/Y6C3YmC9OBmXeP94Zjx9");
      const targetDoc = await getDoc(docRef);
      let data = targetDoc.data();
      if (data !== undefined) {
        function toDateTime(secs: number) {
          var t = new Date(1970, 0, 1);
          t.setSeconds(secs);
          t.setHours(t.getHours() + 7);
          return t;
        }

        var listdate = data.listBlog.map((blog: any) => {
          return toDateTime(blog.datetime.seconds);
        });
        var listDateNew = listdate.map((item: any) => {
          return item.toLocaleString();
        });
        const newListBlog = data.listBlog.map((blog: Blog, index: number) => {
          const newListBlog = { ...blog };

          if (listDateNew[index] !== undefined) {
            newListBlog.datetime = listDateNew[index];
          }
          return newListBlog;
        });
        setListBlog(newListBlog);
      }
    };
    getAllData();
  }, []);

  return (
    <div className="my-[20px]">
      <h1 className="font-bold text-[25px] mb-[10px] text-center">List Blog</h1>
      {listBlog.map((blog: BlogConvert) => (
        <div className="px-2 py-[20px] flex items-center h-[100px] hover:bg-web-200">
          <img
            className="w-[50px] h-[50px]"
            src={blog.thumbnail}
            alt="lehoanganh"
          ></img>
          <div className="relative">
            <h1 className=" mx-[10px] overflow-y-hidden font-semibold text-[12px] h-8 mb-[5px]">
              {blog.tittle}
            </h1>
            <div className=" ml-[10px] text-[10px]">
              <span>{blog.datetime}</span>
              <div className="ml-[20px] underline text-primary-100">
                <NavLink to={blog.link}>show</NavLink>
              </div>
            </div>
            <IconButton
              onClick={handleDelteBlog}
              sx={{
                top: "0px",
                right: "0px",
                position: "absolute",
              }}
            >
              <CloseIcon sx={{ fontSize: "12px" }} />
            </IconButton>
          </div>
        </div>
      ))}
      <div className="flex flex-row-reverse mt-[20px] mr-5 underline text-primary-100">
        <NavLink to={"/"}>View All</NavLink>
      </div>
      <div className="my-[10px]">
        <Pagination count={4} />
      </div>
    </div>
  );
};
