package com.learning.tree;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.learning.util.JsonUtil;
import com.learning.util.ObjectUtil;

/**
 * Created by pengsheng on 15-01-29.
 */
public class TreeNode implements Serializable {

    private String parentId;
    private String id;
    private String name;
    private boolean leaf;

    private Object data;

    private List<TreeNode> childList = new ArrayList<TreeNode>();

    public TreeNode() {
    }

    public void addChildNode(TreeNode treeNode) {
        childList.add(treeNode);
    }

    public boolean insertTreeNode(TreeNode treeNode) {

        String juniorParentId = treeNode.getParentId();
        if (this.parentId == juniorParentId) {
            addChildNode(treeNode);
            return true;
        } else {

            List<TreeNode> childList = this.getChildList();
            boolean insertFlag;

            for (int i = 0, childNumber = childList.size(); i < childNumber; i++) {
                TreeNode childNode = childList.get(i);
                insertFlag = childNode.insertTreeNode(treeNode);
                if (insertFlag == true)
                    return true;
            }
            return false;
        }
    }

    public TreeNode findTreeNodeById(String findid) {

        if (findid.equals(this.id))
            return this;

        for (int i = 0, childNumber = childList.size(); i < childNumber; i++) {
            TreeNode child = childList.get(i);
            TreeNode resultNode = child.findTreeNodeById(findid);
            if (resultNode != null) {
                return resultNode;
            }
        }

        return null;
    }

    public String childToJson() {

        StringBuffer retBuffer = new StringBuffer();
        for (TreeNode treeNode : childList) {

            Map<String, Object> map = ObjectUtil.getProperty(treeNode.getData());
            String jsonDATA = JsonUtil.map2json(map);
            retBuffer.append(jsonDATA).append(",");
        }

        String result = retBuffer.toString();
        result = result.lastIndexOf(",") > 0 ? result.substring(0, result.lastIndexOf(",")) : result;

        return "[" + result + "]";
    }

    public String toString() {

        Map<String, Object> map = ObjectUtil.getProperty(getData());
        String jsonDATA = JsonUtil.map2json(map);
        return jsonDATA;
    }

    public boolean isLeaf() {
        return leaf;
    }

    public void setLeaf(boolean leaf) {
        this.leaf = leaf;
    }
    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public List<TreeNode> getChildList() {
        return childList;
    }

    public void setChildList(List<TreeNode> childList) {
        this.childList = childList;
    }
}
