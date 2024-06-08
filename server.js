const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');
const usageRoutes = require('./routes/usage');
const billingRoutes = require('./routes/billing');
const bodyParser = require('body-parser');

// const webhookRoutes = require('./routes/webhook');

require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.use('/auth', authRoutes);
app.use('/api/usage', usageRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/save-api-calls', billingRoutes);

// app.use('/webhook', webhookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
