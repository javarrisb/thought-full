const { Schema, model } = require('mongoose');


const UserSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: 'You need to provide a username!',
            trim: true 
        },
        email: {
            type: String,
            required: 'Email address is required!',
            unique: true,
            validate: {
                validator: () => Promise.resolve(false),
                message: 'Email validation failed'
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        // prohibits virtuals from making duplicate of _id as `id`
        id: false
    }
);

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, friend) => total + thoughts.replies.length +1, 0);
});

const User = model('User', UserSchema);

module.exports = Pizza;