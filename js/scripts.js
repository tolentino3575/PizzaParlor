function Pizza(pieSize, vegOne, vegTwo, meatOne, meatTwo, pizzaCost) {
  this.pieSize = pieSize;
  this.vegOne = vegOne;
  this.vegTwo = vegTwo;
  this.meatOne = meatOne;
  this.meatTwo = meatTwo;
  this.pizzaCost = 0;
};

Pizza.prototype.calculate = function() {
  if (this.pieSize === "small"){
    this.pizzaCost += 6;
  } else if (this.pieSize === "medium"){
    this.pizzaCost += 8;
  } else if (this.pieSize === "large"){
    this.pizzaCost += 10;
  }
  if (this.vegOne === "Mushrooms"){
    this.pizzaCost += 1;
  } else if (this.vegOne === "Pineapple"){
    this.pizzaCost += 2;
  } else if (this.vegOne === "Onion"){
    this.pizzaCost += .50;
  }
  if (this.vegTwo === "Mushrooms"){
    this.pizzaCost += 1;
  } else if (this.vegTwo === "Pineapple"){
    this.pizzaCost += 2;
  } else if (this.vegTwo === "Onion"){
    this.pizzaCost += .50;
  }
  if (this.meatOne === "Bacon"){
    this.pizzaCost += 1.50;
  } else if (this.meatOne === "STCBacon"){
    this.pizzaCost += 2.50;
  } else if (this.meatOne === "TSTCBacon"){
    this.pizzaCost += 3.50;
  }
  if (this.meatTwo === "Bacon"){
    this.pizzaCost += 1.50;
  } else if (this.meatTwo === "STCBacon"){
    this.pizzaCost += 2.50;
  } else if (this.meatTwo === "TSTCBacon"){
    this.pizzaCost += 3.50;
  }
  return this.pizzaCost;
};



$(document).ready(function() {
  $("form#pizza").submit(function(event){
    var sz = $("select#size").val();
    var veg1 = $("select#veggie1").val();
    var veg2 = $("select#veggie2").val();
    var m1 = $("select#meat1").val();
    var m2 = $("select#meat2").val();

    finalPizza = new Pizza(sz, veg1, veg2, m1, m2);
    finalPizza.calculate();

    $("ul#show").text(finalPizza.calculate);
    event.preventDefault();
  });
});
