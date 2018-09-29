'use strict';

const Service = require('egg').Service;
const appData = require('../mock/data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings


class MockService extends Service {

  async mockSeller() {
      return {
          errno: 0,
          data: seller
      }
  }

    async mockGoods() {
        return {
            errno: 0,
            data: goods
        }
    }

    async mockRatings() {
        return {
            errno: 0,
            data: ratings
        }
    }
}

module.exports = MockService;
