const User = require('../model/userModel')
const bcrypt = require('bcryptjs')


const authController = {
    register: async (req,res) => {
        try {
           const { name,email,mobile,password } = req.body 

           //encrypt the password 
           const encPass = bcrypt.hash(password,10)
            // checking  email already exist or not 
           const extEmail = await User.findOne({ email })
            if(extEmail) 
                return res.status(400).json({ msg: `${email} already exists.` })
            // checking mobile number already exist ot not
            const extMobile = await User.findOne ({ mobile })
                if(extMobile) 
                 return res.status(400).json({ msg: `${mobile} number already exists.`})

           const newUser = await User.create ({
            name,
            email,
            mobile,
            password: encPass
           })

           res.json({ msg : "Registered Succesfullly " ,data: newUser })
        }catch {
            return res.status(500).json({ msg: err.message })
        }
    },
    login: async (req,res) => {
        try {
            res.json({ msg: 'login called'})
        }catch {
            return res.status(500).json({ msg: err.message })
        }
    },
    logout: async (req,res) => {
        try {
            res.json({ msg: 'logout called'})
        }catch {
            return res.status(500).json({ msg: err.message })
        }
    },
    currentUser: async (req,res) => {
        try {
            res.json({ msg: 'current user called'})
        }catch {
            return res.status(500).json({ msg: err.message })
        }
    },
    authToken: async (req,res) => {
        try {
            res.json({ msg: 'auth token  called'})
        }catch {
            return res.status(500).json({ msg: err.message })
        }
    },

}

module.exports = authController 