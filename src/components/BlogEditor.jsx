// BlogEditor.js
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const BlogEditor = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the content to the backend or database
    console.log("Submitted content:", content);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-semibold mb-2">
            Content
          </label>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            placeholder="Write your blog content here..."
            modules={BlogEditor.modules}
            formats={BlogEditor.formats}
            className="mb-4"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// Define Quill modules and formats
BlogEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ["link", "image", "video"],
    ["clean"], // Remove formatting
  ],
};

BlogEditor.formats = [
  "header",
  "font",
  "list",
  "bullet",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "align",
  "color",
  "background",
  "link",
  "image",
  "video",
];

export default BlogEditor;
