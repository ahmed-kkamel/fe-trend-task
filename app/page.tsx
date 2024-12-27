"use client";
import TaskList from "./_components/TaskList";
import { Provider } from "react-redux";
import { store } from "./_store/store";

export default function Home() {
  return (
    <Provider store={store}><TaskList /></Provider>

  );
}
