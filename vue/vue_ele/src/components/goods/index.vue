
<template>
  <div class="goods">
    <!-- 左侧分类菜单列表 -->
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" :key="item.name" class="menu-item border-1px">
          <span class="text">
            <!-- 分类图标 -->
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            <!-- 名称 -->
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>

    <!-- 右侧商品列表 -->
    <div class="food-wrapper">2</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: [],
      // 不同活动图标的样式名称
      classMap: ["decrease", "discount", "special", "invoice", "guarantee"]
    };
  },
  created() {
    this.$http.get("/api/goods").then(res => {
      console.log(2222)
      if (res.data.errno == 0) {
        this.goods = res.data.data;
      }
    });
  },
  methods:{

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@import "../../common/css/mixins.less";

.goods {
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    .menu-item{
      // 可以会一行，多行垂直居中，table是最好的做法
      display: table;
      height: 54px;
      white-space: 56px;
      line-height: 14px;
      padding: 0 12px;
        .icon {
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease {
            .bg-image("decrease_1");
          }
          &.discount {
            .bg-image("discount_1");
          }
          &.guarantee {
            .bg-image("guarantee_1");
          }
          &.invoice {
            .bg-image("invoice_1");
          }
          &.special {
            .bg-image("special_1");
          }
        }
        .text{
          vertical-align: middle;
          font-size: 12px;
          width: 56px;
          display: table-cell;
        }
    }

  }
  .food-wrapper {
    flex: 1;
    height: 100%;
  }
}
</style>
