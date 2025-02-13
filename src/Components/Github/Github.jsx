import { useState, useEffect } from "react";

function Github() {
  const [followers, setFollowers] = useState(0); // State to store follower count
  const username = "immehedihasann";
  const url = `https://api.github.com/users/${username}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFollowers(data.followers); // Update the state with follower count
      })
      .catch((error) => console.error("Error:", error));
  }, []); // Empty dependency array means it runs once on component mount

  return (
    <div className="text-center m-4 p-4 bg-gray-400 text-black text-4xl">
      Github followers: {followers}
    </div>
  );
}

export default Github;
