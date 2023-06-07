const Todos = require('../models/todoModel');
const bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/todos/:uname', function(req, res) {

        // Todos.find({ username: req.params.uname }, function(err, todos) {
        //     if (err) throw err;

        //     res.send(todos);
        // });

        Todos.find({username: req.params.uname})
            .then(function(results) {
                res.send(results);
            })
            .catch(e => console.log(e));

        // Todos.create(starterTodos)
        //     .then(function(results){
        //         res.send(results);
        //     })

    });

    app.get('/api/todo/:id', function(req, res) {

        // Todos.findById({ _id: req.params.id }, function(err, todo) {
        //     if (err) throw err;

        //     res.send(todo);
        // });

        Todos.findById({_id:req.params.id})
            .then(function(results) {
                res.send(results);
            })
            .catch(e => console.log(e));

    });

    app.post('/api/todo', function(req, res) {

        if (req.body.id) {
            // Todos.findByIdAndUpdate(req.body.id, {
            //     todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment
            // }, function(err, todo) {
            //     if (err) throw err;

            //     res.send('Success');
            // });

            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment
            }).then(results => res.send('Success')).catch(e=>console.log(e));

        }

        else {
            const newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save().then( () => res.send('Success')).catch((e) => console.log(e));
        }
    });

    app.delete('/api/todo', function(req, res) {

        // Todos.findByIdAndRemove(req.body.id, function(err) {
        //     if (err) throw err;
        //     res.send('Delete succes');
        // });

        Todos.findByIdAndRemove(req.body.id).then(()=>res.send('delete success'));


    })
}