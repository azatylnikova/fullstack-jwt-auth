import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.userFetching());
//     const response = await axios.get<IUser[]>("http://localhost:5000/users");
//     dispatch(userSlice.actions.userFetchingSuccess(response.data));
//   } catch (e: unknown) {
//     // <-- note `e` has explicit `unknown` type
//     if (typeof e === "string") {
//       dispatch(userSlice.actions.userFetchingError(e.toUpperCase()));
//     } else if (e instanceof Error) {
//       dispatch(userSlice.actions.userFetchingError(e.message));
//     }
//   }
// };

export const fetchUsers = createAsyncThunk(
  "userFetchAll",
  async (_, thunkAPI) => {
    const response = await axios.get<IUser[]>("http://localhost:4000/users");
    return response.data;
  }
);
