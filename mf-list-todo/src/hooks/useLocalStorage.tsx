import { Todo } from "../interfaces/interfaces";

const useLocalStorage = () => {


    const saveToLocalStorage = (key: string, value: Todo[]) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const getFromLocalStorage = (key: string) => {
       return localStorage.getItem(key)
    }
    return { saveToLocalStorage, getFromLocalStorage }
}

export default useLocalStorage