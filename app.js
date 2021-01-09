const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render("index", {message: "うおおおおおお"})
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server started port ${port}`));