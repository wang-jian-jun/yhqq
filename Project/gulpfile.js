var gulp = require('gulp');

gulp.task('default', function () {
    // 将你的默认的任务代码放在这
    console.log(22);
});
gulp.task('minihtml', function () {
    console.log('嘻嘻');
})
gulp.task('minicss', function () {
    console.log('可可');
})
gulp.task('minijs', function () {
    console.log('乐乐');
})
gulp.task('sum', ['minihtml', 'minicss', 'minijs'], function () {
    console.log('执行完毕');
})

// var exec = require('child_process').exec;
// gulp.task('jekyll', function (cb) {
//     // 编译 Jekyll
//     exec('jekyll build', function (err) {
//         if (err) return cb(err); // 返回 error
//         cb(); // 完成 task
//     });
// });