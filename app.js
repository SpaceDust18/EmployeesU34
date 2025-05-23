import express from "express";
const app = express();

app.use(express.json())

app.use(( req, res, next ) => {
    console.log( req.method, req.originalUrl )
    next()
  })

app.get('/', (req, res) => {
  res.send('Welcome to the Fullstack Employees API.');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});









export default app;


