
const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema;




const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Proszę wprowadź nazwę produktu'],
        trim: true,
        maxlength: [100, 'Proszę wprowadź max 100 znaków']
    },
    description: {
        type: String,
        required: [true, 'Proszę wprowadź opis produktu'],
    },
    price: {
        type: Number,
        required: [true, 'Proszę wprowadź nazwę produktu'],
        maxlength: [5, 'Proszę wprowadź max 5 cyfr'],
        default: 0.0
    },

    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],

    ratings: {
        type: Number,
        default: 0,
    },

    category: {
        type: String,
        required: [true, 'Proszę wprowadź kategorię dla tego produktu'],
        enum: {
            values: [
                'Elektronika',
                'Kamery',
                'Laptopy',
                'Akcesoria',
                'Słuchawki',
                'Żywność',
                "Książki",
                'Ubrania/Buty',
                'Strefa Piękna',
                'Sport',
                'Outdoor',
                'Dom i Ogród'
            ],
            message: 'Proszę wybierz poprawną kategorię dla produktu.'
        }
    },
    seller: {
        type: String,
        required: [true, 'Proszę wybierz sprzedawcę.']
    },
    stock: {
        type: Number,
        required: [true, "Proszę wybierz stan magazynowy"],
        maxlength: [5, 'Liczba produktu nie może przekroczyć pięciocyfrowej liczby.'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },


    reviews: [
        {
            user: {
                type: ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        },
        {
            timestamps: true,
        }
    ],
    // user: {
    //     type: ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Product', productSchema)