"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
//inicializa o serviço de servidor do express
const app = (0, express_1.default)();
//consição para realizar requisições para o servidor a partir do mesmo host
app.use((0, cors_1.default)({
    origin: 'http://localhost:4200'
}));
//utilização das rotas criadas no arquivo de rotas
app.use(routes_1.routes);
//indicação da porta de escuta do servidor
app.listen(5000, () => {
    console.log('Server is running.');
});
