import { db, auth } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

/**
 * Weight Management
 * Collection: weights
 * Document structure: { uid, value, date }
 */
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
    .filter((w) => w.uid === user.uid)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

/**
 * Goal Management
 * Collection: goals
 * Document ID: user.uid (one goal per user)
 * Document structure: { uid, value, createdAt, updatedAt }
 */
export const saveGoal = async (value: number) => {
  const user = auth.currentUser;

  if (!user) return;

  await setDoc(doc(db, "goals", user.uid), {
    uid: user.uid,
    value,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
};

export const getGoal = async () => {
  const user = auth.currentUser;
  if (!user) return null;

  const goalDoc = await getDoc(doc(db, "goals", user.uid));
  if (goalDoc.exists()) {
    return goalDoc.data().value;
  }
  return null;
};
