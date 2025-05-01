const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usersFilePath = path.join(__dirname, '../data/users.json');
const { v4: uuidv4, validate } = require('uuid');
const { saveJson, readJson } = require('../db/index');
const { error } = require('console');


module.exports = {
    profile: (req, res) => { },
    update: (req, res) => { },
    logout: (req, res) => { },
};