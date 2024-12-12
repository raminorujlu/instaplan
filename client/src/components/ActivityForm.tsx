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
      className="flex flex-col gap-y-2 items-end bg-gray-200 w-1/2 rounded-2xl shadow-gray-700/50 shadow-lg p-4"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-transparent border border-gray-500 p-2 rounded-md focus:outline-none w-full"
        placeholder="Enter your name"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />
      <input
        type="text"
        className="bg-transparent border border-gray-500 p-2 rounded-md focus:outline-none w-full"
        placeholder="Enter the activity title"
        value={activityTitle}
        onChange={(e) => setActivityTitle(e.target.value)}
        required
      />
      <button
        className="bg-blue-600 text-white rounded-lg cursor-pointer px-6 py-2 hover:bg-blue-700 duration-150 active:scale-95"
        type="submit"
      >
        Add Activity
      </button>
    </form>
  );
};

export default ActivityForm;
