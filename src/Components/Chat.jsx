import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (message.trim() === "") return;
    await addDoc(collection(db, "messages"), {
      text: message,
      sender: auth.currentUser.displayName,
      createdAt: serverTimestamp(),
    });
    setMessage("");
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="w-full max-w-lg p-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 my-2 rounded-md ${
              msg.sender === auth.currentUser.displayName
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="fixed bottom-4 w-full max-w-lg flex">
        <input
          className="flex-1 p-2 border rounded-l-md"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="p-2 bg-green-500 text-white rounded-r-md"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
