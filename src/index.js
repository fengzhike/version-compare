const alphabetMap = {
    base: 1,
    alpha: 2,
    beta: 3,
    rc: 4,
    release: 5
}
function compare(v1, v2) {
    // let re = /\d+\.\d+\.\d+/;
    let re = /\d+\.\d+\.\d+(\.\d+_[a-z]+)?/;
    if (!re.test(v1) || !re.test(v2)) {
        throw new Error('请输入正确的版本号')
    }
    let version1 = v1.match(/(\d+|[a-z]+)/g);
    let version2 = v2.match(/(\d+|[a-z]+)/g);
    let lv1 = version1.length;
    let lv2 = version2.length;
    let l = Math.max(lv1, lv2);

    for (let i = 0; i < l; i++) {
        let item1 = version1[i] || 0;
        let item2 = version2[i] || 0;
        if (i === 4) {
            item1 = alphabetMap[version1[i]] || 0;
            item2 = alphabetMap[version2[i]] || 0;
        }
        if (item2 > item1) {
            return 1;
        }
        if (item2 < item1) {
            return -1;
        }
    }
    return 0;
}

export default compare;
