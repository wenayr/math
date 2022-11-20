export var test;
(function (test) {
    function test1() {
        console.log("test1");
    }
    test.test1 = test1;
})(test || (test = {}));
//# sourceMappingURL=test.js.map