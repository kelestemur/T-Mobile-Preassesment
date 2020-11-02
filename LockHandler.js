exports.handler = async (event) => {
    // TODO implement

    var number = parseInt(event.pathParameters.number);

    const error = {
        statusCode: 403,
        body: JSON.stringify("You are not authorized to see the message. Please enter a prime number to be authorized to see the message."),
    };

    if (isNaN(number) || event.pathParameters.number != number || number <= 1) {
        return error;
    }

    if (number == 2) {
        return {
            statusCode: 200,
            body: "HELLO WORLD :)",
        };
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        var remainder = number % i
        if (remainder == 0) {
            return error;
        }
    }

    return {
        statusCode: 200,
        body: "HELLO WORLD :)",
    };

};