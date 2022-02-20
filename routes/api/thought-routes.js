const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router 
    .route('/')
    .get(getAllThought)
    .post(addThought);

// /api/:thoughtId
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

// /api/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/:reactionId')
    .delete(deleteReaction);

module.exports = router;