import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebaseConfig";

function Login() {
  const navigate = useNavigate();
  const signInWithGoolge = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/chat");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={signInWithGoolge}>sign in with google</button>
    </div>
  );
}
export default Login;
