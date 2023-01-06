require('dotenv').config()
const PORT = 8000
const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
const cors = require('cors')
const { v1: uuidv1} = require('uuid')