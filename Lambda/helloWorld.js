exports.handler =  (event, context, callback) => {
    return callback(null, { statusCode: 200, body: "VERSION 1.0" });
};