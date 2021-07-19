const Quota = require('../Models/GetAQuote')


exports.register = async(req, res) => {
    let authData = req.body;
    let quota = new Quota({
        name: authData.name,
        email: authData.email,
        phone: authData.phone,
        companyName: authData.companyName,
        MC: authData.MC,
        role: authData.role,
        notes: authData.notes,
        NeedAsistent:authData.NeedAsistent,
        From: authData.From,
        To: authData.To,
        PickUpDate: authData.PickUpDate,
        DeliveryDate: authData.DeliveryDate,

        date: Date.now()
    });
    quota.save()
   .then(()=>{
        res.status(201).json({
            success:true,
            data:quota
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