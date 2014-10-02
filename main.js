//1. Find the average price of all items. The average price is $23.62

var getAverage = function(array){
var sum = 0;
  var total = array.forEach(function(item){
    sum = sum + item.price;
    return sum;
  });

  var average = 0;
  average = (sum / array.length).toFixed(2);
  console.log("The average price is: $" + average);
  return average;
}

getAverage(items);


//2. an array of items that cost between $14.00 and $18.00 USD

var get14Items18 = function(array){

  var newArray =[];
  items.forEach(function(item){

  if(item.price <= 18.00 && item.price >= 14.00){
    newArray.push(item);
  }

  else{
    //do nothing
  }

  });
  console.log("\"These are the items that cost between $14.00 and $18.00 USD:\"");

  newArray.forEach(function(item){
    console.log("title: \"" + item.title + "\"");
  });
}

get14Items18(items);

//find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

var getGPB=function(array){
  array.forEach(function(item){
      if(item.currency_code === "GBP"){
        console.log(item.title + " costs \u00A3" +  item.price);
      }
      else{
      //do nothing.  console.log("nothing found");
      }
    });
}

getGPB(items);

//find which items are made of wood. Please console.log the ones you find.

var getWoodItems = function(array){
  var woodItems=[];
  array.forEach(function(item){
    item.materials.forEach(function(material){
      if (material === "wood"){
        woodItems.push(item);
        console.log(item.title + " is made of wood.")
      }
    })
});
}

getWoodItems(items);

var getMadeByEightItems = function(array){
  array.forEach(function(item){
    if(item.materials.length >= 8){
      console.log(item.title + " has " + item.materials.length + " materials: ");
      for(i=0;i < item.materials[i].length; i++){
        console.log(item.materials[i])
      }
    }
});
}

getMadeByEightItems(items);

var madeByOwnerItems = function(array){
  var count=0;
  array.forEach(function(item){
    if(item.who_made === "i_did"){
      count++
    }
  });
  console.log(count + " were made by their sellers.");
}

madeByOwnerItems(items);
