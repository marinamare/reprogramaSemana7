const app = require('./src/app.js');
const port = 9090;

app.listen(port, () => {
    console.log (`App está rodando na porta ${port}`);
});