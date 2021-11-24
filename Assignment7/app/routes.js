var Sample = require("./model/Sample")
var passwordValidator = require('password-validator')

var validator = new passwordValidator()

module.exports = function(app){

    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    // Email Validation check
    function isEmailValid(email) {
    
        if(email.length>254)
            return "Email length exceeded";
    
        var valid = emailRegex.test(email);
        if(!valid)
            return "Invalid Email Address";    
    
        return email;
    }

    // Password Validation check
    function isPasswordValid(password) {
        validator
        .is().min(6)
        .is().max(100)
        .has().uppercase()
        .has().lowercase()
        .has().digits(1)
        
        var errorList = validator.validate(password, {list:true})
        console.log(errorList)

        if(errorList.includes("min"))
            return "Password should be more than 6 characters"
        else if(errorList.includes("max"))
            return "Password should be less than 100 characters"
        else if(errorList.includes("uppercase"))
            return "Password should contain a Uppercase character"
        else if(errorList.includes("lowercase"))
            return "Password should contain a Lowercase character"
        else if(errorList.includes("digits"))
            return "Password should contain a Digit"
        return password

    }


    app.get('/user', function(req, res){

        res.send("Main Frame")
    })

    app.post("/user/create/", function(req, res){

        var inputEmail = isEmailValid(req.body.email)
        var inputPassword = isPasswordValid(req.body.password)
        // console.log(req.body.email)
        var newRec = new Sample(req.body)
        
        if(inputEmail != req.body.email){
            res.send(inputEmail)
            console.log("Invalid Email")
        }
        else if(inputPassword!= req.body.password){
            res.send(inputPassword)
            console.log("Invalid Password")
        }
        else{
            newRec.save(function(err, results){
                console.log("Saved")
            res.json(results)           
        
            })
                
        }
        
    })


    app.get('/user/getAll/', function(req, res){

        Sample.find(function(err, samples){

            if(err)
                res.send(err)
            res.json(samples)
        })
    })

    app.put('/user/edit/:id', (req, res) =>{
        var requestBody = req.body
        const id = req.params.id
        var inputEmail = isEmailValid(req.body.email)
        var inputPassword = isPasswordValid(req.body.password)

        if(inputEmail != req.body.email){
            res.send(inputEmail)
            console.log("Invalid Email")
        }
        else if(inputPassword!= req.body.password){
            res.send(inputPassword)
            console.log("Invalid Password")
        }
        else{
            Sample.findByIdAndUpdate(id, requestBody, {new: true}, function(err, results){
                if(err)
                    console.log(err)
                else {
                    res.send(results)
                // console.log(results)
                }            
            })
        }
        
    })

    app.delete('/user/delete/:id', (req,res)=>{

        var requestBody = req.body

        Sample.findOneAndDelete({id: req.body.id, email: req.body.email, password: req.body.password}, function(err, results){
            if(err)
                res.send(err)
            else{
                res.send(results)   
            }
        })
    })

    

}