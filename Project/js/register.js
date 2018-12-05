
// 杂七杂八的点击事件
var click = (function () {
    var shanchu = document.querySelector('.banner-header .fr');
    var btn = document.querySelector('.banner-footer .btn');
    var banner = document.querySelector('.banner');
    var tishi = document.querySelector('.tishi');
    var num = 0;
    console.log(tishi);
    return {
        init() {
            shanchu.onclick = function () {
                location.href = "../index.html";
            }
            btn.onclick = function () {
                banner.style.display = "none";
            }
            tishi.onclick = function () {
                num = getYZM(4);
                console.log(num);
                this.previousElementSibling.value = num;
            }
            return false;
        }
    }
}())
//失去光标的判断
var check = (function () {
    var checkInput = {
        username(str) {
            var reg = /^1[789]\d{9}$/;
            return reg.test(str);
        },
        verification(str) {
            var reg = /^.{4}$/;
            return reg.test(str);
        },
        password(str) {
            var reg = /^\d{2,15}$/;
            return reg.test(str);
        }
    }
    return {
        init() {
            //获取dom元素
            this.inputAll = document.querySelectorAll('.form input');
            this.form = document.querySelector('.form');
            this.flag = false;
            this.event();

        },
        event() {
            // console.log(checkInput[0]('18370681989'));
            // console.log(this.form);
            // let _this = this;
            var _this = this;
            for (let i = 0; i < this.inputAll.length; i++) {
                // var $span = this.parentNode.nextElementSibling;
                this.inputAll[i].onblur = function () {
                    var $span = this.parentNode.nextElementSibling;
                    if (this.value == '') {
                        // console.log($span);
                        $span.innerHTML = '内容不能为空';
                    }
                    else {
                        var bool = checkInput[this.name](this.value);
                        //正则通过
                        if (bool) {
                            // alert(3333);
                            $span.innerHTML = "可用";
                            //用ajax唯一验证
                            if (i == 0) {
                                _this.formAjax(this.value);
                                // sendAjax("../php/registerName.php", {
                                //     method: "GET",
                                //     data: {
                                //         uname: this.value
                                //     },
                                //     success: function (res) {
                                //         // if (res == '1') {
                                //         //     this.form.children[1].innerHTML = "用户名已存在"
                                //         //     // console.log()
                                //         // }
                                //         alert(1)
                                //     }
                                // });
                            }

                        }
                        //正则失败
                        else {
                            $span.innerHTML = this.getAttribute('data-error');
                        }
                    }

                }
            }
            this.form.onsubmit = function () {
                // debugger
                // var xxxx = _this.flag
                for (let i = 0; i < _this.inputAll.length; i++) {
                    if (checkInput[_this.inputAll[i].getAttribute('name')](_this.inputAll[i].value) == false || _this.flag == false) {
                        return false;
                        // break
                    }
                    // if (checkInput[_this.inputAll[i].getAttribute('name')](_this.inputAll[i].value) != true || _this.flag == true) {
                    //     if () {
                    //         return false;
                    //         break
                    //     }

                    // }
                    // else {
                    //     return true;
                    // }
                }

                return true
            }
        },
        formAjax(value) {

            var _this = this;

            sendAjax("../php/registerName.php", {
                method: "GET",
                data: {
                    uname: value
                },
                success: function (res) {
                    console.log(res)
                    if (res == 1) {
                        // console.log(this.form.children[1])
                        _this.form.children[1].innerHTML = "用户名已存在";
                        _this.flag = false;
                        console.log(_this.flag);
                    }
                    if (res == 0) {
                        _this.flag = true;
                    }
                }
            });
        }
    }
}())