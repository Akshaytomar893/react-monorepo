export interface FolderItems {
  id: string;
  name: string;
  isFolder: boolean;
  items: FolderItems[];
}
export interface FolderState {
  data: FolderItems;
  currentFolder: {
    folderName: string;
    folderItems: FolderItems[];
  };
}
