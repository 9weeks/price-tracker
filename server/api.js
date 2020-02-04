/* eslint consistent-return:0 import/order:0 */
const express = require('express');
const logger = require('./logger');

const api = express.Router();

api.use((req, res, next) => {
  logger.debug('Time:', Date.now());
  next();
});

api.get('/product/:id?', (req, res) =>
  res.json({
    id: 'cj-bibigo-dumpling',
    url:
      'http://www.11st.co.kr/product/SellerProductDetail.tmall?method=getSellerProductDetail&prdNo=1402054566&trTypeCd=PW24&trCtgrNo=585021&lCtgrNo=1001341&mCtgrNo=1001475#ui_option_layer1',
    prices: [
      { date: '2020-01-01', price: 17700 },
      { date: '2020-01-10', price: 19700 },
      { date: '2020-01-21', price: 14900 },
      { date: '2020-01-23', price: 17700 },
      { date: '2020-02-01', price: 20300 },
      { date: '2020-02-10', price: 19700 },
    ],
  }),
);

module.exports = api;
