import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { FileIcon, FolderIcon } from "../assets";

const RightSection = () => {
  const data = useSelector((state: RootState) => state.appState.currentFolder);

  return (
    <div className="rightSection">
      <div className="header">
        <p>{data.folderName ?? ""}</p>
      </div>
      <div className="body">
        {data.folderItems.map((item, key) => (
          <div>
            {item.isFolder ? (
              <img src={FolderIcon} alt="addFolder" height={36} width={36} />
            ) : (
              <img src={FileIcon} alt="addFolder" height={36} width={36} />
            )}
            <p>{item?.name ?? ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSection;
