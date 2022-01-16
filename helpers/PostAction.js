const model = require("../models");

const postAction = async (modelName, req, res) => {
    await model[modelName].create(req.body)
        .then((result) => {
            res
                .status(200)
                .send({ message: "successful", data: result });
        })
        .catch((err) => {
            // console.log("Error",err.errors)
            let errors = err.errors.map((item) => item.message)
            res
                .status(400)
                .send({ message: "Something Went Wrong", error: errors })
        })
}

module.exports = postAction;