import express from 'express';
const app = express();
const port = 3000;

const mysql = require('mysql');

const db = mysql.createConnection({

  user: 'root',
  host: 'localhost',
  password: '1234567',
  database: 'prueba0',


});

app.post('/create', (req, res) => {

  const idCar = req.body.idCar;
  const typeCar = req.body.typeCar;

  db.query('INSERT INTO car(idCar, typeCar) VALUES (?,?)',
  [idCar, typeCar], 
    (err : any, result: any) => {
      if (err){
        console.log(err)
      } else {
        res.send("Values inserted");
      }
    } 
  );

})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});