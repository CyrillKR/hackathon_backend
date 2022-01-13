const Sequelize = require("sequelize");
const { sequelize } = require("./database");

const UsersTable = sequelize.define("usersTable", {
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "user",
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  picture: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "http://www.gravatar.com/avatar/?d=identicon",
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  birth_year: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  bio: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  number_siblings: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  train: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  education: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  //Music

  slow_songs_or_fast_songs: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  dance: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  folk: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  country: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  classical_music: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  musical: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  pop: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  rock: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  metal_or_hardrock: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  punk: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  hiphop_rap: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  reggae_ska: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  swing_jazz: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  rock_n_roll: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  alternative: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  latino: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  techno_trance: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  opera: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  //Movies:

  horror: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  thriller: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  comedy: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  romantic: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  sci_fi: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  war: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  fantasy_fairy_tales: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  animated: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  documentary: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  western: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  action: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },

  // Science:

  mathematics: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  physics: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  biology: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  chemistry: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  medicine: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  geography: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },

  // Social Studies:

  history: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  psychology: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  politics: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  economy: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  law: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },

  //Hi-Tech:

  science_and_technology: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  internet: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  pc: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },

  // Art:

  art_exhibitions: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  theatre: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  dancing: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  musical_instruments: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },

  // Other:

  writing: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  reading: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  foreign_languages: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  cars: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  religion: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  gardening: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  celebrities: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  shopping: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  fun_with_friends: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  pets: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  sport: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  travel: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },

  //Phobias:

  flying: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  thunder_lightning: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  darkness: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  heights: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  spiders: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  snakes: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  rats_mice: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  aging: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  dangerous_dog: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  public_speaking: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  //Health habits
  smoking: {
    type: Sequelize.STRING,
    defaultValue: "no answer",
  },
  drinking: {
    type: Sequelize.STRING,
    defaultValue: "no answer",
  },
  healthy_life_style: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = UsersTable;
