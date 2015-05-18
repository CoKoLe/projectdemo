package com.learning.tree;

/**
 * Created by pengsheng on 15-01-30.
 */

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

public class TreeHelper {

    private static TreeNode root;
    private List<TreeNode> treeNodeList = new ArrayList<TreeNode>();
    private boolean isValidTree = true;

    private static TreeHelper treeHelper = null;

    public TreeHelper() {
    }

    public static TreeHelper getInstance() {

        if (treeHelper == null)
            treeHelper = new TreeHelper();

        return treeHelper;
    }

    public TreeNode getTreeNodeById(TreeNode tree, String id) {
        if (tree == null)
            tree = root;

        if (tree == null)
            return null;

        TreeNode treeNode = tree.findTreeNodeById(id);
        return treeNode;
    }

    public void generateTree() {
        HashMap nodeMap = putNodesIntoMap();
        putChildIntoParent(nodeMap);
    }

    protected HashMap putNodesIntoMap() {

        HashMap nodeMap = new HashMap<String, TreeNode>();
        Iterator it = treeNodeList.iterator();
        while (it.hasNext()) {

            TreeNode treeNode = (TreeNode) it.next();
            String id = treeNode.getId();
            nodeMap.put(id, treeNode);
        }

        return nodeMap;
    }

    protected void putChildIntoParent(HashMap nodeMap) {
        Iterator it = nodeMap.values().iterator();
        while (it.hasNext()) {
            TreeNode treeNode = (TreeNode) it.next();
            String parentId = treeNode.getParentId();
            
            if (nodeMap.containsKey(parentId) && !parentId.equals(treeNode.getId())) {
                TreeNode parentNode = (TreeNode) nodeMap.get(parentId);
                if (parentNode == null) {
                    this.isValidTree = false;
                    return;
                } else {
                    parentNode.addChildNode(treeNode);
                }
            }
        }
    }

    public void addTreeNode(TreeNode treeNode) {
        this.treeNodeList.add(treeNode);
    }

    public boolean insertTreeNode(TreeNode treeNode) {
        boolean insertFlag = root.insertTreeNode(treeNode);
        return insertFlag;
    }

    public TreeNode getRoot() {
        return root;
    }

    public void setRoot(TreeNode root) {
        this.root = root;
    }

    public List<TreeNode> getTreeNodeList() {
        return treeNodeList;
    }

    public void setTreeNodeList(List<TreeNode> treeNodeList) {
        this.treeNodeList = treeNodeList;
    }

    public boolean isValidTree() {
        return isValidTree;
    }

    public void setValidTree(boolean isValidTree) {
        this.isValidTree = isValidTree;
    }
}