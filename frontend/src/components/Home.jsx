import { useEffect, useState } from "react";
import Header from "./Header";
import Post from "./Post";
import API_BASE_URL from "../api";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/posts`);
        const data = await response.json();
        setPosts(data.data || []);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="posts-container">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
