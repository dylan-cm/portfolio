import Project from "@/types/project";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getAllProjects(): Promise<Project[]> {
  let projects: Project[] = [];

  const querySnapshot = await getDocs(collection(db, "projects"));
  querySnapshot.forEach((doc) => {
    const data = doc.data() as Project; // Cast the data to the Project type

    projects.push({
      ...data,
      id: doc.id,
    });
  });

  return projects;
}

export async function getProject(id: string): Promise<Project | undefined> {
  const docRef = doc(db, "projects", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data() as Project;
    return {
      ...data,
      id: docSnap.id,
    };
  } else {
    return undefined;
  }
}

const storage = getStorage();

export async function getImageURL(imagePath?: string) {
  if (!imagePath) return "";
  return getDownloadURL(ref(storage, imagePath))
    .then((url) => {
      return url;
    })
    .catch((error) => {
      return "";
    });
}

export async function getImages(imagePaths?: string[]) {
  if (!imagePaths) return [];
  return await Promise.all(
    imagePaths.map(async (path) => await getImageURL(path))
  );
}

export async function getResume() {
  const docRef = doc(db, "site", "settings");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data() as { resume: string };
    return data.resume;
  } else {
    return undefined;
  }
}
