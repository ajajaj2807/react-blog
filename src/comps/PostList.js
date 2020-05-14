import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PostList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const posts = await axios(
        "http://my-json-server.typicode.com/ajajaj2807/fake-posts-api/posts"
      );
      setData(posts.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {}, [data]);

  if (loading === true) {
    return (
      <div className="post-loader">
        <p> Loading... </p>
      </div>
    );
  }
  return (
    <div className="postlist-c">
      {data.map((i) => (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0 }}
          className="post-card"
          key={i.id}
        >
          <div className="pc-content">
            <Link to={`/post/${i.id}`}>{i.title}</Link>
            <br />
            <span className="post-user">By {i.user}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default PostList;
