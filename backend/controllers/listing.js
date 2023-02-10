const getallListing = async(req,res) => {
    res.send("Get All Listing")
}

const getlListing = async(req,res) => {
    res.send("Get Listing")
}

const postlListing = async(req,res) => {
    res.send("Post Listing")
}

const updateListing = async(req,res) => {
    res.send("Update Listing")
}

const removelListing = async(req,res) => {
    res.send("Remove listing")
}

module.exports = {
    getallListing,
    getlListing,
    postlListing,
    updateListing,
    removelListing
}