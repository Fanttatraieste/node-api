const Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {

        //seed database
        const starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            }, 
            {
                username: 'testuleanu',
                todo:'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username:'test3',
                todo:'learn node',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos)
            .then(function(results){
                res.send(results);
            })
    });
}