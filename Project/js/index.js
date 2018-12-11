// 轮播图
var lunbotu = (function () {
    return {
        init() {
            this.ul = document.querySelector('.banner_1');
            this.ulImg = this.ul.children;
            this.qq = document.querySelector('.banner_2');
            this.qqLi = this.qq.children;
            this.right = document.querySelector('.right');
            this.left = document.querySelector('.left');
            this.index = 0;
            this.zidong = 0;
            this.timer = null;
            for (var i = 0; i < this.qqLi.length; i++) {
                this.qqLi[i].index = i;
            }
            this.fist = this.ulImg[0];
            this.last = this.ulImg[this.ulImg.length - 1];
            this.ul.appendChild(this.fist.cloneNode(true));
            this.ul.insertBefore(this.last.cloneNode(true), this.fist);
            this.ul.style.left = '-720px';
            this.event();
            this.autoplay();
        },
        event() {
            var _this = this;
            this.qq.onclick = function (e) {
                var e = e || window.event;
                var target = e.target || window.target;
                if (target.nodeName == 'LI') {
                    _this.showImg(target.index);
                }
            }
            this.right.onclick = function () {
                _this.index++;
                _this.showImg(_this.index);
                _this.autoplay(_this.index);

            }
            this.left.onclick = function () {
                _this.index--;
                _this.showImg(_this.index)
                _this.autoplay(_this.index);

            }
        },
        showImg(index) {
//          console.log(index);
            if (index > 4) {
                index = 0;
                this.zidong = 0;
                this.ul.style.left = 0;
            }
            if (index < 0) {
                index = 4;
                this.ul.style.left = 6 * -720 + 'px';
            }
            var _this = this;
            this.index = index;
            for (var i = 0; i < _this.qqLi.length; i++) {
                _this.qqLi[i].className = _this.qqLi[i].className.replace('curren', '');
            }
            _this.qqLi[index].className = 'curren';
            var l = -(index + 1) * 720;
//          console.log(l)
            _this.ul.style.left = l + 'px';
        },
        autoplay(index = 0) {
            clearInterval(this.timer);
            var _this = this;
            _this.zidong = index;
            this.timer = setInterval(function () {
                _this.zidong++;
                _this.showImg(_this.zidong);
            }, 2000)
        }
    }
}())