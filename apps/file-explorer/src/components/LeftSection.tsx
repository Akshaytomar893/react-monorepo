import React, { useEffect, useState } from "react";
import Folder from "./Folder";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setCurrentFolder, setData } from "../slices/data-slice";
import { deleteElement, createElement } from "../hooks/operations";

const LeftSection = () => {
  const data = useSelector((state: RootState) => state.appState.data);
  const [explorerData, setExplorerData] = useState(data);
  const dispatch = useDispatch();

  const findCurrentFolderInfo = (
    fileData: any,
    id: string
  ): { name: string; items: any[] } | null => {
    if (fileData.id === id) {
      return { name: fileData.name, items: fileData.items };
    }

    for (let item of fileData.items) {
      const found = findCurrentFolderInfo(item, id);
      if (found) return found;
    }

    return null;
  };

  const handleCreateElement = (
    folderId: string,
    item: any,
    isFolder: boolean
  ) => {
    const finalData = createElement(explorerData, folderId, item, isFolder);
    const currentFolderData = {
      folderName:
        findCurrentFolderInfo(finalData, folderId)?.name ?? finalData.id,
      folderItems:
        findCurrentFolderInfo(finalData, folderId)?.items ?? finalData.items,
    };
    dispatch(setCurrentFolder(currentFolderData));
    dispatch(setData(finalData));
  };
  const handleDeleteElement = (folderId: string) => {
    const finalData = deleteElement(explorerData, folderId);

    dispatch(setData(finalData));
  };

  useEffect(() => {
    setExplorerData(data);
  }, [data]);

  return (
    <div className="app">
      <Folder
        handleDeleteElement={handleDeleteElement}
        handleCreateElement={handleCreateElement}
        explorer={explorerData}
        eleId={explorerData.id}
      />
    </div>
  );
};

export default LeftSection;
