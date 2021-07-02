const express = require('express');
const fs = require('fs');
const path = require('path');


const options = {
    "caseSensitive": false,
    "strict": false
};

const router = express.Router(options);

//todo - option1: using file system 
// router.get('/add-items', function(req, res, next) {
//     fs.createReadStream(path.join(__dirname, '..', 'views', 'add-items.html')).pipe(res);
// });

// todo - option2:
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-products.html'));
});


router.post('/', function(req, res, next) {
    console.log('Save Products');
    console.log(req.body);
    res.send('Save Succesfully!');

    res.redirect('admin/add-product');
})

module.exports = router;