export var test;
(function (test) {
    function test1(a) {
        console.log("test1" + (a ?? 0));
    }
    test.test1 = test1;
})(test || (test = {}));
//# sourceMappingURL=test.js.map