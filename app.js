//importing the libraries//
const express = require(`express`)
const {db} =require(`./database`)

const app =express()
const port =3200

// listening to the server//

//patient_id
//first_name
//last_name
//date_of_birth

const patient =`select patient_id, first_name, last_name,date_of_birth from patients`

app.get(`/`,(req, res)=>{
    res.send(`THIS IS HOMEPAGE`)
})
    //routing for patients//
    app.get(`/patient`,(req,res)=>{
        db.query(patient,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.json(result)


            }
        })
    })

    const providers =` select first_name, last_name,provider_specialty from providers`

    app.get(`/providers`,(req,res)=>{
        db.query(providers,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.json(result)
            }
            
        })
    })

    const patientfirst=` select first_name from patients`

    app.get(`/patientfirst`,(req,res)=>{
        db.query(patientfirst,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.json(result)
            }
            
        })
    })


    const providerspecial =` select provider_specialty from providers`

    app.get(`/provider/specialty`,(req,res)=>{
        db.query(providerspecial,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.json(result)
            }
            
        })
    })


app.listen(port,()=>{
    console.log(`listening on ${port}`);
})
