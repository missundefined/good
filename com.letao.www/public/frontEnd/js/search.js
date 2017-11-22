//主线
//当页面打开的 到search.html 要获取搜索历史
//如果有历史搜索记录 显示历史记录
//如果没有显示 没有搜索记录


// 2，当用户在搜索框输入关键词
// 把用户的搜索词加入到历史记录

// 3，当用户点击删除按钮 我们要删除一条记录

// 4，显示所有记录

// localstorage 叫本地存储 实际上归属于客户端存储
// 设置值: localStorage.setItem(key,value);
// 获取值: localStorage.getItem(key);
// 移除值: localStorage.removeItem(key);
// 清除所有记录： localStorage.clear();

// 在js中 ,json和对象或数组有一个转换的方法
// 如果对象或数组转换为json 用的是 JSON.stringify()
// 如果json转换为对象或数组 用的时 JSON.parse()

$(function () {
    // setHistoryData('addids')

})
//获取搜索记录
var getHistoryData = function () {
    return JSON.parse(window.localStorage.getItem('ltHistory') || '[]');
}
console.log(getHistoryData());
// 设置搜索记录
var setHistoryData = function (value) {
    //获取历史记录
    var list = getHistoryData();
    //遍历数据
    $.each(list, function (i, item) {
        if (value == item) {
            list.splice(i, 1);
        }
    })
    list.push(value);
    //把切掉的数组 放回到历史记录中
    localStorage.setItem('ltHistory', JSON.stringify(list));
}
//移除数据

//首先获取历史数据、
var removeHistoryData = function(value){
    var list = getHistoryData();//获取历史记录
    //找到和历史记录列表数。
    $.each(list,function(i,item){
        if(value == item){
            list.splice(i,1)
        }
    })
    //把切掉的数组 放回到历史记录中
    window.localStorage.setItem('ltHistory',JSON.stringify(list));
}

//显示历史记录

var showHistoryData = function(){
    var list = getHistoryData();//空数组或有长度的数组

    if(list.length == 0){
        //告诉用户没有历史记录
        $('.empty-history').show();
        $('.search-history').hide()
    }else {
        // 展示历史记录
        var historyList = template('historyTemplate',
        {
          // list: ['nike','gucci']
          list:list
        });
        $('.search-history-list').html(historyList);
        $('.search-history').show();
        $('.empty-history').hide();
      }
}