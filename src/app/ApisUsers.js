import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

// CREATE
export const createItem = async (obj) => {
  const colRef = collection(db, "users");
  const data = await addDoc(colRef, obj);
  return data.id;
};

export const createItemCarrito = async (obj, id) => {
  const url = "users/" + id + "/carritos";
  const colRef = collection(db, url);
  const data = await addDoc(colRef, obj);
  return data.id;
};

// UPDATE
export const updateItem = async (id, obj) => {
  const colRef = collection(db, "users");
  await updateDoc(doc(colRef, id), obj);
};

// READ
export const getItems = async () => {
  const colRef = collection(db, "users");
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
};

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value, condition) => {
  const colRef = collection(db, "users");
  const result = await getDocs(query(colRef, where(condition, "==", value)));
  return getArrayFromCollection(result);
};

export const getItemById = async (id) => {
  const colRef = collection(db, "users");
  const result = await getDoc(doc(colRef, id));
  return result.data();
};

// DELETE
export const deleteItem = async (id) => {
  const colRef = collection(db, "users");
  await deleteDoc(doc(colRef, id));
};

const getArrayFromCollection = (collection) => {
  return collection.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};
