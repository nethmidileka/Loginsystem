const express=require('express')
const mysql =require('mysql')
const cors= require('cors')

const app =express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"signup"
    }
)

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    const sql = "INSERT INTO `signup` (`name`, `email`, `password`) VALUES (?, ?, ?)";
    const Values = [name, email, password];


    
    const values=[
        req.body.name,
        req.body.email,
        req.body.password,
    ]
    db.query(sql,[values],(err,data)=>{
        if(err)
        {
            return res.json(err);
        }
        return res.json(data);
    })
}
)

const PORT = process.env.PORT || 8080;
app.listen(8080,()=>{
    console.log("Listening...")

})