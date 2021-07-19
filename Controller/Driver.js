const Driver = require('../Models/BecomeDriver')

let admin = require('../Models/Admin')


exports.register = async(req, res) => {
    let authData = req.body;
    let driver = new Driver({
        name: authData.name,
        email: authData.email,
        phone: authData.phone,
        experiance: authData.experiance,
        Refferances: authData.Refferances,
        date: Date.now()
    });
    driver.save()
   .then(()=>{
        res.status(201).json({
            success:true,
            data:driver
        })
    })
    .catch((e)=>{
        res.status(500).json({
            success:false,
            e
        })
    })

    admin[authData] = driver;
}