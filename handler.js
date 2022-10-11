module.exports.users = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from GET endpoint.'),
    };
    return response;
};

module.exports.posts = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from POSTS endpoint.'),
    };
    return response;
};
