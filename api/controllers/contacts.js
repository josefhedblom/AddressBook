const Contact = require('../model/Contact');

exports.show = async (req,res) => {
    try {
       const contacts = await Contact.find()
       return res.status(200).json(contacts)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({errors: error})
    }
};

exports.contact = async (req,res) => {
    const user = await Contact.findOne({_id: req.params.id})
    try {
        if(user) {
            res.status(200).json({user: user});
        }
    } catch (error) {
        console.error(error.message);
    }
}

exports.add = async (req,res) => {
    const { first_name, last_name, email, phone, city, address, country } = req.body;

    try {
        const contact = await Contact.create({
            first_name,
            last_name,
            email,
            phone,
            city,
            address,
            country
        });
        res.status(200).json(contact);
    } catch (error) {
        console.error(error.message);
        res.status(400).json({errors: error})
    }
};