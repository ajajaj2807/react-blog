import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchpost = async () => {
      const posts = await axios.get(
        "http://my-json-server.typicode.com/ajajaj2807/fake-posts-api/posts"
      );
      const cpost = posts.data.filter((p) => {
        return p.id == params.id;
      });
      const cp = cpost[0];
      setPost(cp);
      setLoading(false);
    };
    fetchpost();
  }, [params]);

  useEffect(() => {}, [post]);

  if (loading) {
    return (
      <div className="lcs">
        <span className="loading-text">Loading...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="single-post-container"
    >
      <Link to="/">Back</Link>
      <h2>{post.title}</h2>
      <br />

      <span className="post-user">By {post.user}</span>
      <span className="post-content">
        {post.content} <br /> <br /> {post.content}{" "}
      </span>
    </motion.div>
  );
};

export default Post;
