const app =require("./app");
dotenv.config({path:"backend/config/config.env"});

app.lisen(process.env.PORT,()=>{
    console.log(`sever is respoending on http://localhost:${process.env.PORT}`)
})