module.exports = (app, db) => {
    app.get('/roads', (req, res) => {
        db.roads.findAll().then((result) => res.json(result));
    })
    app.get( "/roads/:id", (req, res) => {
      console.log('REQ :', req);
      db.roads.findById(req.params.id).then((result) => res.json(result))
    }); 
    app.post("/road", (req, res) => {
      console.log('REQ', req)
        console.log('REQ.BODY', req.body)
        console.log('HEADERS', req.headers)
          db.roads.create({  
            names: req.body.names,
            destinity: req.body.destinity,
            dateSal: req.body.dateSal,
            dateReturn: req.body.dateReturn,
            point: req.body.point,
            city: req.body.city
          }).then((result) => {
            console.log('REISTRO EXITOSO POST: ', result);
            res.json(result.dataValues)
          })
          .catch((error) => {
            console.log('_ERROR REISTRO EXITOSO: ', error);
            res.json(error);
          })
        }      
      );
}

