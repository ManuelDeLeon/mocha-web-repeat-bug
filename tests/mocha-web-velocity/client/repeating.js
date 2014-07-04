if (!(typeof MochaWeb === 'undefined')){
    MochaWeb.testOnly(function(){
        describe("Repeating", function(){
            it("should not repeat upon refresh", function(){
                chai.assert(true);
            });
        });
    });
}
