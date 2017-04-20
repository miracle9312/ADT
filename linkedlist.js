/**
 * Created by miracle on 2017/4/20.
 */
/*
* 链表：
* head
* find
* insert
* remove
* display
* */

datas=['jude female','adele female','mary female','monica female','jenney female',
    'james male','brook male','kobe male','jordan male','oneal male']

//定义一个结点
function Node(element) {
    this.element = element;
    this.next = null;
}

//定义链表
function LinkList (){
    this.head = new Node('head');
    this.find = find;
    this.findPrevious = findPrevious;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.append = append;
}

//查询结点
function find(element){
    var currNode = this.head;
    while(currNode.element!=element){
        currNode = currNode.next;
    }
    return currNode
}

//查询前驱结点
function findPrevious(element){
    var currNode = this.head;
    while (currNode.next.element!=element){
        currNode = currNode.next;
    }
    return currNode;
}

//插入结点
function insert(element,after){
    var currNode = new Node(element);
    var afterNode = this.find(after);
    currNode.next = afterNode.next;
    afterNode.next = currNode;
}

//删除结点
function remove (element){
    var currNode = this.find(element);
    var preNode = this.findPrevious(element);
    if(currNode.next!=null){
        preNode.next.next = currNode.next;
    }else {
        preNode.next = null;
    }
}

//显示结点
function display(){
    var currNode = this.head;
    while (currNode.next!=null){
        console.log(currNode.next);
    }
}

//向末尾添加结点
function append(element){
    var currNode = this.head;
    var newNode = new Node(element);
    while(currNode.next!=null){
        currNode = currNode.next;
    }
    currNode.next = newNode;

}

function testList(){
    var newList = new LinkList();
    datas.map(function(data){
        var tempArr = data.split(" ");
        var tempObj = {};
        tempObj[tempArr[0]] = tempArr[1];
        newList.append(tempObj)
    })
    console.log(newList)
}

testList();



