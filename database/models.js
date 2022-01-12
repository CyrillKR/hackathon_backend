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
    allowNull: false,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  picture: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  birth_year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bio: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  number_siblings: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  train: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  education: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  //Music

  slow_songs_or_fast_songs: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  dance: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  folk: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  country: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  classical_music: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  musical: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  pop: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  rock: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  metal_or_hardrock: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  punk: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  hiphop_rap: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  reggae_ska: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  swing_jazz: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  rock_n_roll: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  alternative: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  latino: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  techno_trance: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  opera: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  //Movies:

  horror: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  thriller: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  comedy: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  romantic: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  sci_fi: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  war: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  fantasy_fairy_tales: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  animated: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  documentary: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  western: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  action: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },

  // Science:

  mathematics: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  physics: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  biology: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  chemistry: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  medicine: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  geography: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },

  // Social Studies:

  history: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  psychology: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  politics: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  economy: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  law: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },

  //Hi-Tech:

  science_and_technology: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  internet: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  pc: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },

  // Art:

  art_exhibitions: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  theatre: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  dancing: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  musical_instruments: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },

  // Other:

  writing: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  reading: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  foreign_languages: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  cars: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  religion: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  gardening: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  celebrities: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  shopping: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  fun_with_friends: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  pets: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  sport: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  travel: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },

  //Phobias:

  flying: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  thunder_lightning: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  darkness: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  heights: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  spiders: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  snakes: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  rats_mice: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  aging: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  dangerous_dog: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  public_speaking: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
  //Health habits
  smoking: {
    type: Sequelize.STRING,
    default: false,
    allowNull: false,
  },
  drinking: {
    type: Sequelize.STRING,
    default: false,
    allowNull: false,
  },
  healthy_life_style: {
    type: Sequelize.BOOLEAN,
    default: false,
    allowNull: false,
  },
});

module.exports = UsersTable;
