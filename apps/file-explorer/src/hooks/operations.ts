export const createElement = function (
  tree: any,
  folderId: any,
  item: any,
  isFolder: any
) {
  if (tree.id === folderId && tree.isFolder) {
    return {
      ...tree,
      items: [
        {
          id: new Date().getTime().toString(),
          name: item,
          isFolder: isFolder,
          items: [],
        },
        ...tree.items,
      ],
    };
  }

  return {
    ...tree,
    items: tree.items.map((ob: any) =>
      createElement(ob, folderId, item, isFolder)
    ),
  };
};

export const deleteElement = function (tree: any, folderId: any) {
  if (tree.id === folderId) {
    return null;
  }

  return {
    ...tree,
    items: tree.items
      .map((item: any) => deleteElement(item, folderId))
      .filter(Boolean),
  };
};
