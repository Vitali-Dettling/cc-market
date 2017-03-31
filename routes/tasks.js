var express = require('express');
var router = express.Router();

//Kraken client, in order to call the kraken api 
var krakenCon = require('./controllers/krakenController')

//MongoDB connection 
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/demo',['tasks']);

/**
 * Get Ticker Info
 * @param  {String}   API      The API method (public or private)
 * @param  {Function} callback A callback function to be executed when the request is complete
 * @return {Object}            The request object
 */
router.get('/ticker', function(req, res, next){

    krakenCon.ticker(function(err, data){
        console.log("err: " + err + " data : " + data)
        if(err){
            res.send(err);
        }else{
            res.json(data.result);
        }
    });
});     


//////////////// Test scenarios below ////////////////

//Get all tasks
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

//Get single tasks
router.get('/task/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

//Post save task
router.post('/task', function(req, res, next){

    var task = req.body;

    if(!task.title || (task.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        })
    }else{
        db.tasks.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        })
    }
});


//Delete delete task
router.delete('/task/:id', function(req, res, next){
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

//Put update task
router.put('/task/:id', function(req, res, next){
    
    var task = req.body
    var updTask = {}

    if(task.isDone){
        updTask.isDone = task.isDone;
    }
    
    if(task.title){
        updTask.title = task.title;
    }

    if(!updTask){
        res.status(400);
        res.json({
            "error": "Bad Data"
        })
    }else{
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {}, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

module.exports = router;