// Infinite Chef Sushi Mod
// Created by CyanMungus

 addIngredient("sushi_rice", {
     type:"rice",
     color:"#f5f2e8"
 });

addIngredient("nori", {
    type:"seaweed",
    color:"#172d25",
    width:3,
    tags:["sushi","seaweed"]
});

addIngredient("imitation_crab", {
    type:"meat",
    shape:"crustacean",
    placedShape:"rectangle_thin",
    color:"#f28a80",
    innerColor:"#fff2e7",
    tags:["sushi","seafood"]
});

addIngredient("cucumber_strip", {
    type:"cucumber",
    color:"#65b84d",
    innerColor:"#c5e8a0",
    shape:"rectangle_thinnest",
    stackShape:null,
    scale:2,
    height:0.3,
    width:1,
    tags:["sushi","vegetable"]
});

addIngredient("avocado_strip", {
    type:"avocado",
    color:"#8bcf68",
    innerColor:"#c9e8a1",
    shape:"rectangle_thinnest",
    scale:2,
    height:0.3,
    width:1,
    stackShape:null,
    tags:["sushi","fruit"]
});

addRecipe(
    "sushi_rice+nori+imitation_crab+cucumber_strip+avocado_strip",
    "California Roll"
);
