/**
 * Created by miracle on 2017/4/20.
 */
/*
* 列表：
* 1、前后元素具有一定联系
* 2、每个元素具有相同类型
* 3、长度一定
* 4:方法
* listSize
* pos
* clear
* toString
* getElement
* insert
* append
* remove
* front
* end
* prev
* next
* currPos
* moveTo
* length
* contains
* 5：实现
* 人列表，输出相同性别
* */

//初始数据
persons=['jude female','adele female','mary female','monica female','jenney female',
    'james male','brook male','kobe male','jordan male','oneal male']

//定义一个Person类
function Person(name,sex) {
    this.name = name;
    this.sex = sex;
    this.isMale = isMale;
}

//定义一个personList列表
function personList(){
    this.dataStore = [];
    this.pos = 0;
    this.listSize = 0;
    this.clear=clear;
    this.toString = toString;
    this.getElement = getElement;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.length = length;
    this.contains = contains;
    this.find = find;
}

//向末尾添加一个元素
function append(element){
    /*this.dataStore[++]=element*/
    this.dataStore.push(element);
    this.listSize++;
}

//查看是否包含一个元素
function contains(element){
    return this.dataStore.indexOf(element)>-1;
}

//查找一个元素
function find(element) {
    return this.dataStore.indexOf(element);
}

//插入一个元素
function insert(element,after){
    if(this.dataStore.contains(after)){
        var index = this.find(after);
        this.dataStore.splice(index+1,0,element);
        this.listSize++;
        return true;
    }
    return false;
}

//删除一个元素
function remove (element){
    if(this.dataStore.contains(element)){
        var index = this.find(element);
        this.dataStore.splice(index,1);
        this.listSize--;
        return true;
    }
    return false;
}

//清空一个列表
function clear(){
    this.dataStore = [];
    this.listSize = this.pos =0;
}

//返回列表长度
function length(){
    return this.listSize;
}

//返回列表
function toString() {
    return this.dataStore;
}

//返回当前位置的元素
function getElement(){
    return this.dataStore[this.pos];
}

//将当前位置移动到第一个元素
function front(){
    this.pos = 0;
}

//将当前位置移动到最后一个位置
function end(){
    this.pos = this.listSize-1
}

//将当前位置前移一位
function prev(){
    --this.pos;
}

//将当前位置后移一位
function next(){
    ++this.pos;
}

//返回当前位置
function currPos(){
    return this.pos;
}

//移动到指定位置
function moveTo(pos){
    this.pos = pos;
}

//判断元素性别
function isMale(){
    if(this.sex==='male'){
        return true;
    }else {
        return false;
    }
}

//初始化一个包含十个数据的列表
function diffSex(){
    var maleArr = new personList();
    var femaleArr = new personList();
    var people = new personList();
    persons.map(function (val) {
        var arr = val.split(" ");
        var tempPerson = new Person(arr[0],arr[1]);
        people.append(tempPerson)
    })

    //遍历people
    for(people.front();people.pos<people.listSize;people.next()){
        var person = people.getElement();
        if(person.isMale()){
            maleArr.append(person);
        }else{
            femaleArr.append(person);
        }
    }

    //返回结果
    return {male:maleArr.toString(),female:femaleArr.toString()};

}
