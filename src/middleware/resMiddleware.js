module.exports = (req, res, next) => {
    res.someError = (error) => {
        res.status(400).send(error);
    }

    res.success = (message) => {
        res.status(200).send(message);
    }
    next();
}