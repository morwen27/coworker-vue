import axios from "axios";
import { Person } from "./models/person";

const baseURL = "http://localhost:3000/persons";

export async function getData() {
  try {
    const res = await axios.get(`${baseURL}`);
    return res.data;
  } catch (error) {
    console.log(`Во время запроза произошла следующая ошибка: ${error}`);
  }
}

export async function addPerson(person: Person) {
  await axios.post(baseURL, person);
}

export async function removePerson(person: Person) {
  await axios.delete(`${baseURL}/${person.id}`);
}

export async function editPerson(person: Person) {
  await axios.put(`${baseURL}/${person.id}`, person);
}
