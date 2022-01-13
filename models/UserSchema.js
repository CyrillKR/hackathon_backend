const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    user_id: {
        type: Number,
    },
    first_name: {
        type: String,
        required: [true, 'First name is required']
    },
    last_name: {
        type: String,
        required: [true, 'Last name is required']
    },
    picture: {
        type: String,
        default: "http://www.gravatar.com/avatar/?d=identicon"
    },
    phone_number: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    birth_year: {
        type: Number
    },
    number_siblings: {
        type: Number
    },
    train: {
        type: Number
    },
    education: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
    },
    role: {
        type: String,
        enum: ['user', 'adm'],
        default: 'user'
    },
    bio: {
        type: String
    },
    slow_songs_or_fast_songs: {
        type: Boolean,
        default: false,
    },
    dance: {
        type: Boolean,
        default: false,
    },
    folk: {
        type: Boolean,
        default: false,
    },
    country: {
        type: Boolean,
        default: false,
    },
    classical_music: {
        type: Boolean,
        default: false,
    },
    musical: {
        type: Boolean,
        default: false,
    },
    pop: {
        type: Boolean,
        default: false,
    },
    rock: {
        type: Boolean,
        default: false,
    },
    metal_or_hardrock: {
        type: Boolean,
        default: false,
    },
    punk: {
        type: Boolean,
        default: false,
    },
    hiphop_rap: {
        type: Boolean,
        default: false,
    },
    reggae_ska: {
        type: Boolean,
        default: false,
    },
    swing_jazz: {
        type: Boolean,
        default: false,
    },
    rock_n_roll: {
        type: Boolean,
        default: false,
    },
    alternative: {
        type: Boolean,
        default: false,
    },
    latino: {
        type: Boolean,
        default: false,
    },
    techno_trance: {
        type: Boolean,
        default: false,
    },
    opera: {
        type: Boolean,
        default: false,
    },
    horror: {
        type: Boolean,
        default: false,
    },
    thriller: {
        type: Boolean,
        default: false,
    },
    comedy: {
        type: Boolean,
        default: false,
    },
    romantic: {
        type: Boolean,
        default: false,
    },
    sci_fi: {
        type: Boolean,
        default: false,
    },
    war: {
        type: Boolean,
        default: false,
    },
    fantasy_fairy_tales: {
        type: Boolean,
        default: false,
    },
    animated: {
        type: Boolean,
        default: false,
    },
    documentary: {
        type: Boolean,
        default: false,
    },
    western: {
        type: Boolean,
        default: false,
    },
    action: {
        type: Boolean,
        default: false,
    },
    mathematics: {
        type: Boolean,
        default: false,
    },
    physics: {
        type: Boolean,
        default: false,
    },
    biology: {
        type: Boolean,
        default: false,
    },
    chemistry: {
        type: Boolean,
        default: false,
    },
    medicine: {
        type: Boolean,
        default: false,
    },
    geography: {
        type: Boolean,
        default: false,
    },
    history: {
        type: Boolean,
        default: false,
    },
    psychology: {
        type: Boolean,
        default: false,
    },
    politics: {
        type: Boolean,
        default: false,
    },
    economy: {
        type: Boolean,
        default: false,
    },
    law: {
        type: Boolean,
        default: false,
    },
    science_and_technology: {
        type: Boolean,
        default: false,
    },
    internet: {
        type: Boolean,
        default: false,
    },
    pc: {
        type: Boolean,
        default: false,
    },
    art_exhibitions: {
        type: Boolean,
        default: false,
    },
    theater: {
        type: Boolean,
        default: false,
    },
    dancing: {
        type: Boolean,
        default: false,
    },
    musical_instruments: {
        type: Boolean,
        default: false,
    },
    writing: {
        type: Boolean,
        default: false,
    },
    reading: {
        type: Boolean,
        default: false,
    },
    foreign_languages: {
        type: Boolean,
        default: false,
    },
    cars: {
        type: Boolean,
        default: false,
    },
    religion: {
        type: Boolean,
        default: false,
    },
    gardening: {
        type: Boolean,
        default: false,
    },
    celebrities: {
        type: Boolean,
        default: false,
    },
    shopping: {
        type: Boolean,
        default: false,
    },
    fun_with_friends: {
        type: Boolean,
        default: false,
    },
    pets: {
        type: Boolean,
        default: false,
    },
    sport: {
        type: Boolean,
        default: false,
    },
    travel: {
        type: Boolean,
        default: false,
    },
    flying: {
        type: Boolean,
        default: false,
    },
    thunder_lighting: {
        type: Boolean,
        default: false,
    },
    darkness: {
        type: Boolean,
        default: false,
    },
    heights: {
        type: Boolean,
        default: false,
    },
    spiders: {
        type: Boolean,
        default: false,
    },
    snakes: {
        type: Boolean,
        default: false,
    },
    rats_mice: {
        type: Boolean,
        default: false,
    },
    aging: {
        type: Boolean,
        default: false,
    },
    dangerous_dog: {
        type: Boolean,
        default: false,
    },
    public_speaking: {
        type: Boolean,
        default: false,
    },
    smoking: {
        type: String,
    },
    drinking: {
        type: String
    },
    health_life_style: {
        type: Number
    }
});

UserSchema.methods.bcrypt = async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    await this.save();
};

UserSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id, firstName: this.firstName, lastName: this.lastName, role: this.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME });
};

UserSchema.methods.comparePassword = async function (password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
};

module.exports = mongoose.model('User', UserSchema);