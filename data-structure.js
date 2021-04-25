function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
}

class ListStack {
    constructor(val) {
        this.next = null;
        this.val = val
    }
    // 将数组转化为链表结构
    static arrayToListNode (arr) {
        if (arr.length === 0) return null;
        // 生成链表的根节点
        let root = new ListStack(arr[0]);
        // 记录上一个节点
        let pre = root;
        for (let i = 1; i < arr.length; i++) {
            let node = new ListStack(arr[i]);
            // 创建连接关系 将前一个结点的NEXT设置为当前节点
            pre.next = node;
            // 更新pre为当前节点 下一个要处理的节点
            pre = node;
        }
        return root
    }
}
