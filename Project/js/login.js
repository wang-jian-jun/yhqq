var login = (function () {
    var checkInput = {
        username(str) {
            var reg = /^1[789]\d{9}$/;
            return reg.test(str);
        },
        password(str) {
            var reg = /^\d{2,15}$/;
            return reg.test(str);
        }
    }
    return {
        init() {
            this.inputAll = document.querySelectorAll('.foot3 input');
            this.form = document.querySelector('.form');
            this.event();
        },
        event() {
            var _this = this;
            // console.log(this.form);
            for (let i = 0; i < this.inputAll.length; i++) {
                this.inputAll[i].onblur = function () {
                    var p = this.nextElementSibling;
                    // console.log(p);
                    if (this.value == '') {
                        p.innerHTML = '内容不能为空';
                    }
                    else {
                        var bool = checkInput[this.name](this.value);
                        if (bool) {
                            p.innerHTML = '符合要求';
                        }
                        else {
                            p.innerHTML = this.getAttribute('data-error');
                        }
                    }
                }
            }
            this.form.onsubmit = function (e) {
                e.preventDefault()
                //判断正则是否都合格
                for (let i = 0; i < _this.inputAll.length; i++) {
                    if (checkInput[_this.inputAll[i].getAttribute('name')](_this.inputAll[i].value) != true) {
                        return false;
                    }
                }
                console.dir(_this.form)
                //正则都合格，进行ajax认证一切
                sendAjax("../php/login.php", {
                    method: "POST",
                    data: {
                        username: _this.form['username'].value,
                        password: _this.form['password'].value
                    },
                    success: function (res) {
                        alert(res);
                        if (res == 1) {
                            // return true
                            location.href = '../index.html';
                        }
                        if (res == 0) {
                            // return false
                            location.href = 'login.html'
                        }
                    }
                });

            }
        }
    }
}())