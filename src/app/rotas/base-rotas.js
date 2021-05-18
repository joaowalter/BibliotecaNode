const BaseControlador = require('../controladores/base-controlador');
const baseControlador = new BaseControlador();

const Livro = require('../modelos/livro')

module.exports = (app) => {
    const rotasBase = BaseControlador.rotas();

    app.get(rotasBase.home, baseControlador.home());

    app.route(rotasBase.login)
        .get(baseControlador.login())
        .post(baseControlador.efetuaLogin());

};