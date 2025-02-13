import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-400  text-black p-4 text-center text-4xl">
      User:{userid}
    </div>
  );
}

export default User;
