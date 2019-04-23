const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: 'OK',
    });
});

// ------ Object controller ------

const objectController = require('./core/objectController');

router
    .route('/objects/')
    .post(botUserController.create)
    .get(botUserController.getAll)
    .put(botUserController.updateAll)
    .delete(botUserController.deleteAll);

router
    .route('/objects/:objectId')
    .get(botUserController.getById)
    .put(botUserController.updateById)
    .delete(botUserController.deleteById);


