const { stringify } = require('jade/lib/utils');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const favouriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dishes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dishes'
        }
    ]
},{
    timestamps: true
});

const Favourites = mongoose.model('Favourite', favouriteSchema);

module.exports = Favourites;