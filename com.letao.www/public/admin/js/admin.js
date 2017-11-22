// 该文件的功能是用来写首页的js交互的


// 1.进度条
// 不要让进度条显示圆圈
NProgress.configure({ showSpinner: false });

//全局监听 当页面中某一个AJAX请求发起时 让进度条开始

$(window).ajaxStart(function () {
    NProgress.start();
})

// 当AJAX请求完成的时候 让进度条完成

$(window).ajaxComplete(function () {
    NProgress.done();
})

//2，功能 点击左侧的菜单按钮 让左侧的侧边栏消失 让右边的内容沾满全屏
// 步骤
$('[data-menu]').on('click', function () {
    //toggle切换
    $('.lt-aside').toggle();
    $('.lt-section').toggleClass('menu');
})

//3,功能 点击分类管理滑出菜单

$('.lt-aside .menu').on('click', '[href="javascript:;"]', function () {
    var _this = $(this);
    var child = _this.siblings();
    child.slideToggle();
})

//4，点击退出按钮 弹出遮罩层 发起请求 推出用户登录
//1，点击按钮
$('#logout-modal').on('click', '.btn-primary', function () {
    //2，点击确定按钮 发起ajax请求
    $.ajax({
        type: 'get',
        url: '/employee/employeeLogin',
        data: {},
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            if (data.success == true) {
                setTimeout(function () {
                    location.href = './login.html';
                }, 500)
            }
        }

    })

    //4，隐藏遮罩层 把地址定位到登录页
})

