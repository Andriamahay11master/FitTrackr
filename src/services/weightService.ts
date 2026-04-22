import { db, auth } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const saveWeight = async (value: number) => {
  const user = auth.currentUser;

  if (!user) return;

  await addDoc(collection(db, "weights"), {
    uid: user.uid,
    value,
    date: new Date().toISOString(),
  });
};

export const getWeights = async () => {
  const user = auth.currentUser;
  if (!user) return [];

  const snapshot = await getDocs(collection(db, "weights"));

  return snapshot.docs
    .map((doc) => doc.data())
    .filter((w) => w.uid === user.uid);
};
