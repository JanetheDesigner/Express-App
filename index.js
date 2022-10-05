// const app= require('express')();

// const PORT = 4000;

// app.listen(
//     PORT,
//     () => console.log( `server is running on ${PORT}`)
// );

// app.get('/getRequest', (req,res)=>{
//     res.send("hello this is sucessful get request ")
// });


app.post(`/postRequest`,(req,res)=>{
    res.send("hello this is sucessfull Post Request")
})