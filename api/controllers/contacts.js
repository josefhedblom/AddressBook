const Contact = require('../model/Contact');

const seed = {
    first_name: 'John',
    last_name: 'Appleseed', 
    email: 'john.appleseed@example.com', 
    phone: '000 00 00 00', 
    address: '1 infinite loop', 
    city: 'Cupertino', 
    zipCode: 'CA 95014,', 
    country: 'United States', 
    profile_img: 'https://robohash.org/appleseed.png?size=50x50&set=set1'
}

exports.show = async (req,res) => {
    try {
        const contacts = await Contact.find()
        if(contacts.length !== 0){
            return res.status(200).json({contacts: contacts})
        } else {
            const contactSeed = Contact.create(seed);
            return res.status(200).json({contacts: contactSeed})
        }
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
    const profile_img = `https://robohash.org/${first_name}.png?size=50x50&set=set1`

    try {
        const contact = await Contact.create({
            first_name,
            last_name,
            email,
            phone,
            city,
            address,
            country,
            profile_img
        });
        res.status(200).json(contact);
    } catch (error) {
        console.error(error.message);
        res.status(400).json({errors: error})
    }
};