Products = new Mongo.Collection('Products');

let ProductsSchema = new SimpleSchema({
  producttext: {type: String},
  producttitle: {type: String},
  productmedia: {type: String},
  productmember: {type: String},
  productmembers: {type: String},
  productdate: {type: String},
  productprice: {type: String},
  productshipprice: {type: String},
  productshiptime: {type: String},
});

Products.attachSchema( ProductsSchema );
