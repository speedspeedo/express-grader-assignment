var express = require("express");
var router = express.Router();

var manufacturers = [
  {
    id: 1,
    name: "Lego",
    imageUrl: "/images/lego.png",
  },
  {
    id: 2,
    name: "Disney",
    imageUrl: "/images/disney.jpg",
  },
  {
    id: 3,
    name: "Fisher-Price",
    imageUrl: "/images/fisher.jpg",
  },
];
var products = [
  {
    id: 1,
    name: "LEGO Marvel Avengers: Avengers Tower Battle 76166 Collectible Building Toywith Action Scenes and Superhero Minifigures; Cool Holiday or Birthday Gift, New 2020(685 Pieces)",
    price: 89.95,
    imageUrl: "/images/product_1.jpeg",
    description:
      "With 5 floors and 7 feature-packed rooms, the LEGO Marvel Avengers:Avengers Tower Battle (76166) is bursting with role-play possibilities with classic Marvel characters",
    manufacturerId: 1,
  },
  {
    id: 2,
    name: "LEGO Friends 41016: Advent Calendar",
    price: 24.95,
    imageUrl: "/images/product_2.jpg",
    description: "description placeholder",
    manufacturerId: 1,
  },
  {
    id: 3,
    name: "LEGO Star Wars 75018: Jek-14's Stealth Starfighter",
    price: 68.87,
    imageUrl: "/images/product_3.jpg",
    description: "description placeholder",
    manufacturerId: 1,
  },
  {
    id: 4,
    name: "Disney Phineas and Ferb 8 Ferb Plush, soft, cuddle doll toy",
    price: 19.99,
    imageUrl: "/images/product_4.jpeg",
    description: "description placeholder",
    manufacturerId: 2,
  },
  {
    id: 5,
    name: "DESPICABLE ME 2 - Minion cuddly Soft Toy - Plush Figures Banana 28-33 cm, MinionTyp:Bob",
    price: 19.99,
    imageUrl: "/images/product_5.jpg",
    description: "description placeholder",
    manufacturerId: 2,
  },

  {
    id: 6,
    name: "Disney Pixar Buzz Lightyear Mouvement D'Action",
    price: 230.9,
    imageUrl: "/images/product_6.jpg",
    description: "description placeholder",
    manufacturerId: 3,
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect(302, "products");
});
/* GET products listing page. */
router.get("/products", function (req, res, next) {
  res.render("products", {
    title: "Product Listing",
    description: "This page shows a list of products.",
    products,
  });

  // const obj =  {title, description, products} -> obj.title, obj.products
});
/* GET product page. */
// var result = products.map((a) => a.id);
//   console.log("product id", result);
// console.log(req.params.id);
router.get("/products/:id", function (req, res, next) {
  // Fill in the code: get the parameter
  var requestedId = parseInt(req.params.id);

  // Get the requested product from the product list
  var requestedProduct = products.filter(function (product) {
    return product.id === requestedId;
  });

  // Check if the requested product id exist
  if (requestedProduct.length > 0) {
    res.render("product", {
      title: "Product Page",
      product: requestedProduct[0],
      description: "This page shows the details of a product",
    });
  } else {
    // 404 Product not found
    res.status(404).send("Product not found");
  }
});

/* GET manufacturer listing page. */
router.get("/manufacturers", function (req, res, next) {
  res.render("manufacturers", {
    title: "Manufacturer Page",
    description: "This page shows a list of manufacturers.",
    manufacturers,
  });
});

/* GET manufacturer page. */
router.get("/manufacturers/:id", function (req, res, next) {
  // Fill in the code: get the parameter
  var requestedId = parseInt(req.params.id);

  // Get the requested product from the product list
  var requestedProducts = products.filter(function (product) {
    return product.manufacturerId === requestedId;
  });

  res.render("manufacturer", {
    title: "Manufacturer Page",
    description: "This page shows a list of products from this manufacturer.",
    products: requestedProducts
  });
});

module.exports = router;
