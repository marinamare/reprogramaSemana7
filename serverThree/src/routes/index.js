const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
    res.send({
        titulo: 'livros muito bons',
        data: '26/09/2020'
    })
});

module.exports = router; 