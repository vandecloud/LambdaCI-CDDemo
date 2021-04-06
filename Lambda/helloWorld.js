exports.handler =  (event, context, callback) => {
    return callback(null, { statusCode: 200, body: "Hola desde el futuro" + "${10*👋}"});
};
