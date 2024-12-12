import { useEffect, useState } from "react";
import axios from "axios";

interface Activity {
  user_name: string;
  activity_title: string;
}

const ActivityList = ({ activityAdded }: { activityAdded: boolean }) => {
  const [activities, setActivities] = useState([]);

  const fetchActivities = () => {
    axios
      .get("http://127.0.0.1:5000/activities")
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching activities:", error);
      });
  };

  useEffect(() => {
    fetchActivities();
  }, [activityAdded]);

  return (
    <div className="w-1/2">
      <div className="flex flex-row flex-nowrap justify-start items-center gap-x-2">
        <h2 className="text-3xl text-white font-light">Submitted Activities</h2>
        <button
          className="bg-white/35 text-white aspect-square p-1 rounded-lg group"
          onClick={fetchActivities}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 group-active:rotate-180 duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
      <ul className="mt-2 flex flex-col gap-y-2">
        {activities.map((activity: Activity, index) => (
          <li
            key={index}
            className="w-full border border-white rounded-lg text-white p-0 flex flex-row flex-nowrap items-center gap-x-2"
          >
            <strong className="text-zinc-800 h-full bg-white p-2 rounded-s-md">
              {activity.user_name}
            </strong>
            {activity.activity_title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;
