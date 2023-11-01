import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <>
      <h1>Reactivities</h1>
      {activities.map((activity: any) => (
        <p key={activity.id}>{activity.title}</p>
      ))}
    </>
  );
}

export default App;
