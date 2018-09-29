'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {
    // this.ctx.body = 'hi, egg';
    await this.ctx.render('better_scroll.html')
  }

  // 商家信息
  async seller() {
    this.ctx.body = await this.service.mock.mockSeller()
  }

  // 商品数组
  async goods() {
    this.ctx.body = await this.service.mock.mockGoods()
  }

  // 评价打分
  async ratings() {
    this.ctx.body = await this.service.mock.mockRatings()
  }

}

module.exports = HomeController;
