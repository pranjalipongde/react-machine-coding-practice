const useTraverseTree = () => {
  function insertnode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }
  }

  return { insertnode };
};

export default useTraverseTree;
