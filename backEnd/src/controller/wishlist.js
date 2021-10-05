const Wishlist = require("../models/whishlist");

exports.addItemToWishlist = (req, res) => {
  Wishlist.findOne({ user: req.user._id }).exec((error, wishlist) => {
    if (error) return res.status(400).json({ error });
    if (wishlist) {
      // res.status(200).json({ message: wishlist });
      const product = req.body.wishlistItems.product;
      const item = wishlist.wishlistItems.find(
        (w) => w.product == product
      );
      let condition, update;

      if (item) {
        condition = { user: req.user._id, "wishlistItems.product": product }
        update = {
            $set: {
              "wishlistItems.$": { ...req.body.wishlistItems },
            },
          }
      } else {
        condition = { user: req.user._id }
        update = {
            $push: {
              wishlistItems: req.body.wishlistItems,
            },
          }
      }
      Wishlist.findOneAndUpdate( condition, update ).exec((error, _wishlist) => {
          if (error) return res.status(400).json({ error });
          if (_wishlist) {
            return res.status(201).json({ wishlist: _wishlist });
          }
        });
    } else {
      const wishlist = new Wishlist({
        user: req.user._id,
        wishlistItems: [req.body.wishlistItems],
      });

      wishlist.save((error, wishlist) => {
        if (error) return res.status(400).json({ error });
        if (wishlist) {
          return res.status(201).json({ wishlist });
        }
      });
    }
  });
};

// exports.addItemToWishlist = (req, res) => {
//   const wishlist = new Wishlist({
//     user: req.user._id,
//     wishlistItems: req.body.wishlistItems
//   })

//   wishlist.save((error, wishlist) => {
//     if(error) return res.status(400).json({ error });
//     if(wishlist){
//       return res.status(201).json({ wishlist })
//     }
//   })
// }