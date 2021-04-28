window.addEventListener('load', () => {
    const fs = require('fs');
    const path = require('path')
    const db = path.join(__dirname, '../database/models/index.js');

    console.log(db)
})