import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { IUser } from "../interfaces/IUser";
import { auth } from "../firebaseConfig";

const BASE_URL = `https://q11.jvmhost.net/`

export const signIn = async (email: string, password: string): Promise<IUser> => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const firebaseUser: IUser = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
            providerId: user.providerId,
            creationTime: user.metadata.creationTime,
            lastSignInTime: user.metadata.lastSignInTime,
        };

        return firebaseUser;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error signing in:", error.message);
            throw new Error(error.message); // Re-throw the error to be handled by the caller
        } else {
            console.error("An unknown error occurred");
            throw new Error("An unknown error occurred");
        }
    }
};



export const registerUser = async (email: string, password: string): Promise<IUser> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const firebaseUser: IUser = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
            providerId: user.providerId,
            creationTime: user.metadata.creationTime,
            lastSignInTime: user.metadata.lastSignInTime,
        };

        return firebaseUser;
    } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
            throw new Error("The email address is already in use by another account.");
        } else if (error.code === 'auth/invalid-email') {
            throw new Error("The email address is not valid.");
        } else if (error.code === 'auth/operation-not-allowed') {
            throw new Error("Email/Password accounts are not enabled.");
        } else if (error.code === 'auth/weak-password') {
            throw new Error("The password is too weak.");
        } else {
            throw new Error(error.message);
        }
    }
};

export async function loadCartById(userId: string) {
    try {
      const result = await fetch(`${BASE_URL}/api/cart/${userId}`, {
        method: 'GET',
        redirect: 'follow',
      });
      const data = await result.json();
      console.log(`Data fetched for  id ${userId}:`, data);
      return data;
    } catch (error) {
      console.error(`Error fetching  id ${userId}:`, error);
      throw error;
    }
  }