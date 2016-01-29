describe('Pizza', function(){
it ("will display pizza properties", function (){
  var testPizza = new Pizza("Small", "Mushroom", "Onion", "Bacon", "Ham");
  expect(testPizza.pieSize).to.equal("Small");
  expect(testPizza.vegOne).to.equal("Mushroom");
  expect(testPizza.vegTwo).to.equal("Onion");
  expect(testPizza.meatOne).to.equal("Bacon");
  expect(testPizza.meatTwo).to.equal("Ham");
  });

it("will calculate the price of pizza", function (){
  var testPizza = new Pizza("Small", "Mushroom", "Onion", "Bacon", "Ham");
  expect(testPizza.calculate()).to.equal(2);
  });
});
