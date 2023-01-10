const awesomeFunction = (req, res, next) => {
    res.json('Maizie Toland');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Leslie Harman');
};


module.exports = {awesomeFunction, returnAnotherPerson};