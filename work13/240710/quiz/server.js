const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.json());
//view engine
app.set('view engine', 'ejs');

// 라우터

app.use('/user', router);


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
