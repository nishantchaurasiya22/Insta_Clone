import { useState } from "react";
import { usePost } from "../hooks/usePost";
import "../styles/create-post.scss"
const CreatePost = () => {
  const [caption, SetCaption] = useState("");
  const { handleCreatePost } = usePost()
  const [fileKey, SetFileKey] = useState(0);
  const [file, SetFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("file", file);
    await handleCreatePost(formData)
    SetFile(null);
    SetCaption("");
    SetFileKey((prev) => prev + 1);
  };

  return (
    <div className="create-post">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          key={fileKey}
          accept="image/*"
          onChange={(e) => SetFile(e.target.files[0])}
        />

        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => SetCaption(e.target.value)}
        />

        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;