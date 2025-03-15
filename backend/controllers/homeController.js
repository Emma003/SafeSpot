
const getHello = (req, res) => {

    try {
        res.status(200).json({message: 'emma is here!'});
            
    } catch (error) {
        res.status(400).json({message: error.message});
    }
    
}


//export functions
module.exports = {
    getHello
}