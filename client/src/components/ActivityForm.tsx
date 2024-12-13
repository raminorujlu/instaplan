import { useState } from "react";
import axios from "axios";

type FormProps = {
  onActivityAdded: () => void;
};

const ActivityForm = ({ onActivityAdded }: FormProps) => {
  const [userName, setUserName] = useState("");
  const [activityTitle, setActivityTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send the data to the Flask server
    axios
      .post("http://127.0.0.1:5000/add_activity", {
        user_name: userName,
        activity_title: activityTitle,
      })
      .then((response) => {
        console.log(response.data);
        onActivityAdded(); // Fetch the updated list of activities
        setUserName("");
        setActivityTitle("");
      })
      .catch((error) => {
        console.error("There was an error adding the activity:", error);
      });
  };

  return (
    <form
      className="flex flex-col bg-zinc-50 shadow-indigo-700/30 shadow-lg gap-y-2 items-end border border-indigo-600/20 w-4/5 lg:w-1/2 rounded-2xl p-4"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-transparent border border-indigo-600 text-indigo-600 p-2 rounded-md focus:outline-none w-full"
        placeholder="Enter your name"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <input
        type="text"
        className="bg-transparent border border-indigo-600 text-indigo-600 p-2 rounded-md focus:outline-none w-full"
        placeholder="Enter the activity title"
        value={activityTitle}
        onChange={(e) => setActivityTitle(e.target.value)}
        required
      />
      <button
        className="bg-[#63e] text-white rounded-lg cursor-pointer px-6 py-2 hover:bg-violet-800 duration-150 active:scale-95"
        type="submit"
      >
        Add Activity
      </button>
    </form>
  );
};

export default ActivityForm;
