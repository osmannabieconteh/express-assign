 var app = express();

 var PORT = process.env.PORT || 8080;

 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());


 app.get("/api/friends", function(req, res){
     



    if (tableDate.length < 5) {
        tableDate.push(req.body);
        res.join(true);

    }

    else{
        waitListData.push(req.body);
        res.json(false)
    }
 })

 
 app.post("/app/friends", function(req, res){
     



    if (tableDate.length < 5) {
        tableDate.push(req.body);
        res.join(true);

    }

    else{
        waitListData.push(req.body);
        res.json(false)
    }
 })