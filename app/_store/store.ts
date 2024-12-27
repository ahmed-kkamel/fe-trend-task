import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../_types/task";
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "../_utils/localStorageUtils";

type TasksState = {
  tasks: Task[];
  searchTerm: string;
};

const initialState: TasksState = {
  tasks: loadTasksFromLocalStorage(),
  searchTerm: "",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      if (index >= 0) {
        state.tasks[index] = action.payload;
        saveTasksToLocalStorage(state.tasks);
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, setSearchTerm } =
  tasksSlice.actions;

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
