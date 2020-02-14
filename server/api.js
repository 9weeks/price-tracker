/* eslint consistent-return:0 import/order:0 */
const express = require('express');
const moment = require('moment');
const logger = require('./logger');
const { randn } = require('./utils');

const api = express.Router();

api.use((req, res, next) => {
  logger.debug('Time:', Date.now());
  next();
});

// /product/A2139012391230?origin=11st&period=24&options=%EB%A7%A4%EC%9A%B4%EB%A7%9B,%EA%B0%88%EB%B9%84%EB%A7%9B
api.get('/product/:id?', (req, res) => {
  const { period } = req.query; // origin, options

  // error handling for query parameters
  const p = parseInt(period, 10);
  const start = moment().subtract(p, 'months');
  const end = moment();
  const days = moment.duration(end - start).asDays();
  const priceCount = randn(days);

  const standardPrice = Math.floor(Math.random() * 200000);
  const maxVariation = Math.random();
  const dateMap = {};
  const prices = [];
  for (let i = 0; i < priceCount; i += 1) {
    let d;
    do {
      d = Math.floor(Math.random() * days);
    } while (dateMap[d]);
    dateMap[d] = true;
  }

  const priceDates = Object.keys(dateMap);
  for (let i = 0; i < priceDates.length; i += 1) {
    const d = dateMap[i];
    prices.push({
      name: start
        .clone()
        .add(d, 'days')
        .toDate(),
      date: Math.floor(
        standardPrice + standardPrice * (1 - Math.random() * maxVariation),
      ),
    });
  }

  return res.json({
    pid: 'cj-bibigo-dumpling',
    opt: '1',
    url:
      'http://www.11st.co.kr/product/SellerProductDetail.tmall?method=getSellerProductDetail&prdNo=1402054566&trTypeCd=PW24&trCtgrNo=585021&lCtgrNo=1001341&mCtgrNo=1001475#ui_option_layer1',
    prices,
  });
});

module.exports = api;
