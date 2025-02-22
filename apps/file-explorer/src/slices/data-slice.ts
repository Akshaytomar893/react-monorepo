import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fileExplorerData } from "../mock-data/mock-data";
import { FolderState } from "../types/types";

const initialState: FolderState = {
  data: fileExplorerData,
  currentFolder: {
    folderName: fileExplorerData?.name ?? "",
    folderItems: fileExplorerData?.items ?? [],
  },
};

const dataSlice = createSlice({
  name: "AppState",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setCurrentFolder: (state, action) => {
      state.currentFolder = action.payload;
    },
  },
});

export const { setData, setCurrentFolder } = dataSlice.actions;
export default dataSlice.reducer;
