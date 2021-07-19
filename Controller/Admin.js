const Admin = require('../Models/Admin.js')


exports.register = async(req, res) => {
    let authData = req.body;
    let admin = new Admin({
        
        email: authData.email,
        
    });
    admin.save()
   .then(()=>{
        res.status(201).json({
            success:true,
            data:admin
        })
    })
    .catch((e)=>{
        res.status(500).json({
            success:false,
            e
        })
    })
}