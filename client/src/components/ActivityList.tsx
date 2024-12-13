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
    <div className="w-4/5 lg:w-1/2">
      <h2 className="text-3xl text-zinc-800 font-light">
        Submitted Activities
      </h2>

      <ul className="mt-2 flex flex-col gap-y-2 overflow-y-scroll max-h-[250px]">
        {[...activities].reverse().map((activity: Activity, index) => (
          <li
            key={index}
            className="w-full border flex flex-row flex-nowrap justify-start border-indigo-600 rounded-lg text-indigo-600 p-0 items-center gap-x-2"
          >
            <strong className="text-zinc-100 h-full bg-indigo-600 p-2 rounded-s-md truncate [flex-basis:100px] text-center">
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
