import { useState } from "react";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";

function App() {
  const [activityAdded, setActivityAdded] = useState(false);

  const handleActivityAdded = () => {
    setActivityAdded(!activityAdded);
  };

  return (
    <main className="w-full h-screen grid place-items-start py-12 bg-gradient-to-tr from-cyan-500 via-emerald-500 to-lime-400">
      <div className="w-full flex flex-col gap-y-4 items-center">
        <h1 className="text-6xl text-white font-bold text-center">InstaPlan</h1>
        <ActivityForm onActivityAdded={handleActivityAdded} />
        <ActivityList activityAdded={activityAdded} />
      </div>
    </main>
  );
}

export default App;
