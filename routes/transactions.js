const exp=require('express');
const Tapp=exp.Router();
const ObjectID=require('mongodb').ObjectId;  // for retriving object id of the document
const expresAsyncHandler=require('express-async-handler');


Tapp.use(exp.json());

Tapp.get('/get', expresAsyncHandler(async (req, res) => {

  let Tcoll = req.app.get('Tcoll');

  let obj = await Tcoll.find().toArray();



  res.send({ success: true, data: obj });
}))


Tapp.post('/post', expresAsyncHandler(async (request, response) => {



  let Tcoll = request.app.get('Tcoll');
  let nO = request.body;
  let u = await Tcoll.insertOne(nO);


  response.send({
    success: true,
    data: nO
  });
}))

Tapp.delete('/get/:id', expresAsyncHandler(async (req, res) => {

  let ind = req.params.id;

  const Tcoll = req.app.get('Tcoll');
  const id = ind;
  const query = { _id: new ObjectID(id) };
  const result = await Tcoll.findOne(query);

  let p = await Tcoll.deleteOne(result);


  res.send({ success: true, data: {} });


}))

module.exports = Tapp;