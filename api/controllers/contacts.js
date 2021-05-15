const Contact = require('../model/Contact');


exports.show = async (req,res) => {
    try {
       const contacts = await Contact.find()
       return res.status(200).json({contacts: contacts })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({errors: error})
    }
};

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
        res.status(201).json({contact: contact});
    } catch (error) {
        console.error(error.message);
        res.status(400).json({errors: error})
    }
};