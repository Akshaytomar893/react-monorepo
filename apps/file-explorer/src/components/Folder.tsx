import React, { useEffect, useState } from "react";
import "../App.css";
import { DeleteIcon, FileIcon, FolderIcon, PlusIcon } from "../assets";
import { useDispatch } from "react-redux";
import { setCurrentFolder } from "../slices/data-slice";
import { FolderItems } from "../types/types";

interface props {
  explorer: FolderItems;
  handleCreateElement: (folderId: string, item: any, isFolder: boolean) => void;
  handleDeleteElement: (folderId: string) => void;
  eleId: string;
}

const Folder: React.FC<props> = ({
  explorer,
  handleCreateElement,
  handleDeleteElement,
  eleId,
}) => {
  const [showInput, setShowInput] = useState<{
    visible: boolean;
    isFolder: boolean;
  }>({
    visible: false,
    isFolder: false,
  });
  const [expand, setExpand] = useState(false);
  const dispatch = useDispatch();

  const handleNewFolder = (e: any, isFolder: boolean) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e: any): any => {
    if (e.keyCode === 13 && e.target.value) {
      handleCreateElement(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5, marginLeft: 5 }}>
        <div
          className="folder"
          onClick={() => {
            dispatch(
              setCurrentFolder({
                folderName: explorer.name ?? "",
                folderItems: explorer?.items ?? [],
              })
            );
            setExpand(!expand);
          }}
        >
          <span>
            {" "}
            <img src={FolderIcon} alt="addFolder" height={12} width={12} />
            {explorer.name}
          </span>
          <div>
            <img src={PlusIcon} alt="add" height={16} width={16} />
            <img
              src={FolderIcon}
              alt="addFolder"
              onClick={(e) => handleNewFolder(e, true)}
              height={16}
              width={16}
            />
            <img
              src={FileIcon}
              alt="addFile"
              onClick={(e) => handleNewFolder(e, false)}
              height={16}
              width={16}
            />{" "}
            {eleId && eleId != "0" && (
              <img
                src={DeleteIcon}
                alt="delete"
                onClick={(e) => handleDeleteElement(explorer?.id)}
                height={16}
                width={16}
              />
            )}
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 5 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>
                {showInput.isFolder ? (
                  <img
                    src={FolderIcon}
                    alt="addFolder"
                    height={12}
                    width={12}
                  />
                ) : (
                  <img src={FileIcon} alt="addFile" height={12} width={12} />
                )}
              </span>
              <input
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                type="text"
                className="inputContainer__input"
              />
            </div>
          )}
          {explorer.items.map((item: any) => {
            return (
              <Folder
                handleCreateElement={handleCreateElement}
                handleDeleteElement={handleDeleteElement}
                explorer={item}
                eleId={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="file">
          <img src={FileIcon} alt="addFile" height={12} width={12} />{" "}
          {explorer.name}
        </span>
        <img
          src={DeleteIcon}
          alt="delete"
          onClick={(e) => handleDeleteElement(explorer?.id)}
          height={16}
          width={16}
        />
      </div>
    );
  }
};

export default Folder;
