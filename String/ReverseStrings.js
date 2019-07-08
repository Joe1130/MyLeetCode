//leetCode 557 反转字符串中的单词 三
var test = 'this is my test-';
var fuc = s => {
    let strings = s.split(' ');
    let results = strings.map(item => {
        return item.split('').reverse().join('')
    }
    );
    return results;
};

//简略版本,内存占用少，速度并不快
var fucSimple = s => {
    return s.split(' ').map(item => {
        return item.split('').reverse().join('')
    }).join(' ');
}
console.log(fucSimple(test));
