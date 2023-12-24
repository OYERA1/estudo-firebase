import { auth } from "./firebaseService";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  User,
  deleteUser,
} from "firebase/auth";

export async function login(email: string, pass: string) {
  return signInWithEmailAndPassword(auth, email, pass);
}

export async function logout() {
  return signOut(auth);
}

export async function register(email: string, password: string, name: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName: name });
    console.log(user.displayName);
    return console.log("antes"), user, console.log(user, "depois");
  } catch (e) {
    throw e;
  }
}

export function onAuthChanged(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

export function deleteUsers(user: User | null) {
  try {
    if (user && confirm("Are you sure you want to delete")) {
      deleteUser(user);
      alert("Usuario deletado");
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
  }
}
