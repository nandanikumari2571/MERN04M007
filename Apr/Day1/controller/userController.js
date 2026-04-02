const createUser = async (req,res) => {
    try {
        console.log("data",req.body);
        res.send("post.request");

    } catch (error) {

    }
}

module.exports = {createUser};
