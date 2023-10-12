import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import "../css/storyaiScreen.css";

interface StoryApiResponse {
  index: number;
  message: string;
  finish_reason: string;
}

const StoryaiScreen = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmitHandler = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post<StoryApiResponse>("/api/openairoute", {
        message: `title: ${title}, description: ${description}`,
      });
      setLoading(false);
      console.log(res);
      setData(res.data.message);
    } catch (err: any) {
      console.log(
        `status code: ${err.response.status},\nError Message: ${err.response.statusText} `
      );
    }
  };
  return (
    <>
      <Header btnName="Welcome" disable={true} />
      <div className="storyAiContainer">
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="titleInput">
            <span>Title</span>
            <span>:</span>
          </label>
          <input
            type="text"
            placeholder="Enter the story title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="titleInput"
          />
          <label htmlFor="descriptionInput">
            <span>Description</span> <span>:</span>
          </label>
          <input
            type="text"
            id="descriptionInput"
            placeholder="Describe your story"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className={`submit ${loading ? "disabled" : null}`}
            disabled={loading}
          >
            create
          </button>
        </form>
        <br />
        <hr />
        <br />
        <pre id="storyText" style={{ whiteSpace: "pre-wrap" }}>
          {loading ? "Loading..." : data}
        </pre>
      </div>
    </>
  );
};

export default StoryaiScreen;
