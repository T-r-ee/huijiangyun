<template>
  <div class="content">
    <div class="box1">
      <div class="item">
        <div class="title">
          <span class="title-font">甲板机舱</span>
        </div>
        <div
          :class="['list-icon',index===0?'list-icon-top':'']"
          v-for="(item,index) of device1"
          :key="index"
        >
          <div :class="['box_16 ',item.status?'red':'blue'] "></div>
          <span class="list-name">{{item.name}}</span>
        </div>
      </div>
      <div style="width:100%;height:15px"></div>
      <div class="item">
        <div class="title">
          <span class="title-font">其他</span>
        </div>
        <div
          :class="['list-icon',index===0?'list-icon-top':'']"
          v-for="(item,index) of device2"
          :key="index"
        >
          <div :class="['box_16 ',item.status?'red':'blue'] "></div>
          <span class="list-name">{{item.name}}</span>
        </div>
      </div>
    </div>

    <div class="box1">
      <div class="item">
        <div class="title">
          <span class="title-font">油渣、污水系统</span>
        </div>
        <div
          :class="['list-icon',index===0?'list-icon-top':'']"
          v-for="(item,index) of device3"
          :key="index"
        >
          <div :class="['box_16 ',item.status?'red':'blue'] "></div>
          <span class="list-name">{{item.name}}</span>
        </div>
      </div>
        <div style="width:100%;height:15px"></div>
      <div class="item">
        <div class="title">
          <span class="title-font">其他</span>
        </div>
        <div
          :class="['list-icon',index===0?'list-icon-top':'']"
          v-for="(item,index) of device4"
          :key="index"
        >
          <div :class="['box_16 ',item.status?'red':'blue'] "></div>
          <span class="list-name">{{item.name}}</span>
        </div>
      </div>
    </div>

    <div class="box1">
      <div class="item-top">
        <div class="title">
          <span class="title-font">油渣、污水系统</span>
        </div>
        <div
          :class="['list-icon',index===0?'list-icon-top':'']"
          v-for="(item,index) of device5"
          :key="index"
        >
          <div :class="['box_16 ',item.status?'red':'blue'] "></div>
          <span class="list-name">{{item.name}}</span>
        </div>
      </div>
       <div style="width:100%;height:15px"></div>
      <div class="item-btm">
        <div class="title">
          <span class="title-font">其他</span>
        </div>
        <div
          :class="['list-icon',index===0?'list-icon-top':'']"
          v-for="(item,index) of device6"
          :key="index"
        >
          <div :class="['box_16 ',item.status?'red':'blue'] "></div>
          <span class="list-name">{{item.name}}</span>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="title">
        <span class="title-font">其他</span>
      </div>
      <div class="list">
        <div class="list-left">
          <div
            :class="['list-icon',index===0?'list-icon-top':'']"
            v-for="(item,index) of device7"
            :key="index"
          >
            <div :class="['box_16 ',item.status?'red':'blue'] "></div>
            <span class="list-name">{{item.name}}</span>
          </div>
        </div>
        <div class="list-right">
          <div
            :class="['list-icon',index===0?'list-icon-top':'']"
            v-for="(item,index) of device8"
            :key="index"
          >
            <div :class="['box_16 ',item.status?'red':'blue'] "></div>
            <span class="list-name">{{item.name}}</span>
          </div>

          <div
            :class="['list-icon','text-style',index===0?'list-icon-top':'']"
            v-for="(item,index) of device9"
            :key="index"
          >
            <span class="value">{{item.value}}</span>
            <span>{{ item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

          <script>
export default {
  name: "VideoView",
  data() {
    return {
      device1: [
        { name: "侧推公共报警", status: 1 },
        { name: "晶部绞缆机公共报誉", status: 0 },
        { name: "NO.1能机液压泵组综合报誉", status: 0 },
        { name: "No.2舵机液压泵组综合报普", status: 0 },
        { name: "NO.1舰管首密封油柜液位低", status: 0 },
        { name: "NO.1舰管后密封油柜液位低", status: 0 },
        { name: "NO.1尾管密封空气控制单元综合报警", status: 0 },
        { name: "NO.2晁管首密封油柜液位低", status: 0 },
        { name: "NO.2舰弯后密封油柜液位低", status: 0 },
        { name: "NO.1尾管密封空气控制单元综合报警", status: 0 }
      ],

      device2: [
        { name: "防海生物系统公共报警", status: 1 },
        { name: "外加电流阴极保护故障", status: 0 },
        { name: "机舱报警灯柱继电器箱电源故障", status: 0 },
        { name: "广播对讲通用报系统电源故障", status: 0 },
        { name: "冷库呼叫报警", status: 0 },
        { name: "冷库呼叫系统电源故障", status: 0 },
        { name: "病员呼叫报警", status: 0 },
        { name: "病员呼叫系统电源故障", status: 0 },
        { name: "NO.1尾管密封空气控制单元综合报警", status: 0 }
      ],
      device3: [
        { name: "油渣轮 (左) 液位高", status: 1 },
        { name: "油渣轮 (右) 液位高", status: 0 },
        { name: "废油舱液位高", status: 0 },
        { name: "油水分离故障器", status: 0 },
        { name: "油水分离器油份浓度高", status: 0 },
        { name: "生活污水处理装置故障 ", status: 0 },
        { name: "生活污水处理装置溢流报警", status: 0 },
        { name: "生活污水舱液位高", status: 0 },
        { name: "灰水舱高位报警", status: 0 }
      ],
      device4: [
        { name: "NO.1 货舱左污水井液位", status: 1 },
        { name: "NO.1 货舱右污水井液位", status: 0 },
        { name: "NO.2 货舱左污水井液位", status: 0 },
        { name: "NO.2 货舱右污水井液位", status: 0 },
        { name: "NO.3 货舱左污水井液位", status: 0 },
        { name: "NO.3 货舱右污水井液位", status: 0 },
        { name: "NO.1 货舱通风污水井", status: 0 },
        { name: "NO.2 货舱通风污水井", status: 0 },
        { name: "NO.3 货舱通风污水井", status: 0 }
      ],
      device5: [
        { name: " No.1空调压缩机运行", status: 1 },
        { name: "NO.2 空调压缩机运行", status: 0 },
        { name: "空调风机运行", status: 0 },
        { name: "1号空调压缩机公告报警", status: 0 },
        { name: "2号空调压缩机公告报警", status: 0 },
        { name: "NO.1冷藏压缩机运行", status: 0 },
        { name: "NO.2冷藏压缩机运行", status: 0 },
        { name: "冷藏装置公共报警", status: 0 },
        { name: "肉库冷风机运行", status: 0 },
        { name: "鱼库冷风机运行", status: 0 },
        { name: "蔬菜库冷风机运行", status: 0 },
        { name: "千货库冷风机运行", status: 0 },
        { name: "主机车钟失电报警", status: 0 }
      ],
      device6: [
        { name: "淡水舱(左)液位低", status: 1 },
        { name: "淡水舱 (右)液位低", status: 0 },
        { name: "热水柜综合报警", status: 0 },
        { name: "淡水压力柜综合报警", status: 0 },
        { name: "紫外线消毒装置公共报警", status: 0 }
      ],
      device7: [
        { name: "厨房分电箱AC 440V绝缘低报警", status: 1 },
        { name: "厨房分电箱AC 220V绝缘低报警", status: 0 },
        { name: "机轮滑门综合报警", status: 0 },
        { name: "货舱冷水机组#1运行", status: 0 },
        { name: "货舱冷水机组#1公共报警", status: 0 },
        { name: "货舱冷水机组#2运行", status: 1 },
        { name: "货舱冷水机组#2公共报警", status: 0 },
        { name: "货舱冷水机组#3运行", status: 0 },
        { name: "货舱冷水机组#3公共报警", status: 0 },
        { name: "货舱冷水机组#4运行", status: 0 },
        { name: "货舱冷水机组#4公共报警", status: 1 },
        { name: "货舱冷水机组冷却海水泵 # 1故障", status: 0 },
        { name: "货舱冷水机组冷媒水循环泵#1故障", status: 0 },
        { name: "货舱冷水机组冷却海水泵 # 2故障", status: 0 },
        { name: "货舱冷水机组冷媒水循环泵#2故障", status: 0 },
        { name: "货舱冷水机组冷却海水泵 # 3故障", status: 0 },
        { name: "货舱冷水机组冷媒水循环泵#3故障", status: 0 },
        { name: "货舱冷水机组冷却海水泵 # 4故障", status: 0 },
        { name: "货舱冷水机组冷媒水循环泵#4故障", status: 0 }
      ],
      device8: [
        { name: "货舱空调器单元#1故障", status: 1 },
        { name: "货空调器单元#2故障", status: 0 },
        { name: "货空调器单元#3故障", status: 0 },
        { name: "货空调器单元#4故障", status: 0 },
        { name: "货空调器单元#5故障", status: 0 },
        { name: "货空调器单元#6故障", status: 0 }
      ],
      device9: [
        { value: "13.54", name: "°C NO.1 货舱左温度" },
        { value: "13.83", name: "°C NO.1 货舱右温度" },
        { value: "13.34", name: "°C NO.2 货舱左温度" },
        { value: "13.24", name: "°C NO.2 货舱右温度" },
        { value: "13.44", name: "°C NO.3 货舱左温度" },
        { value: "13.73", name: "°C NO.3 货舱左温度" }
      ]
    };
  },
  mounted() {},
  methods: {
    goto(e, index) {
      this.navArray.filter(item => {
        item.check = false;
      });
      this.navArray[index].check = true;
      if (this.$route.path === e || !e) return;

      this.$router.push(e);
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  position: relative;
  width: 1490px;
  justify-content: space-between;
  height: 790px;
  flex: 1;
  display: flex;
  .box1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .item {
      width: 310px;
      height: 388px;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd6b289111a6b7a6a1d30b5d0f6f50bf83777959dbee79d12a6d55cacebee431f)
        100% no-repeat;
      background-size: 100% 100%;
    }

    .item,
    .item-top,
    .item-btm {
      .title {
        height: 36px;
        background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4914af5982f323d40a28bb16056dea66d33f1cbbc6702d8ca50ab209fd4f5096) -9px -9px
          no-repeat;
        background-size: 328px 54px;
        width: 310px;
        .title-font {
          width: 72px;
          height: 18px;
          color: rgba(234, 249, 254, 1);
          font-size: 18px;
          font-weight: 700;
          line-height: 36px;
          margin-left: 14px;
        }
      }
      .list-icon-top {
        margin-top: 24px;
      }
      .list-icon {
        display: flex;
        align-items: center;

        height: 14px;
        margin-left: 14px;
        margin-bottom: 15px;
        .red {
          background-color: rgba(224, 32, 32, 1);
        }
        .blue {
          background-color: rgba(32, 64, 124, 1);
        }
        .box_16 {
          border-radius: 50%;
          width: 10px;
          height: 10px;
          margin-top: 2px;
        }
        .list-name {
          height: 14px;
          overflow-wrap: break-word;
          color: rgba(234, 249, 254, 1);
          font-size: 14px;
          margin-left: 10px;
          line-height: 21px;
        }
      }
    }
    .item-top {
      width: 310px;
      height: 496px;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng92bb68bae22cadccc723b6aa1105616c2839f2e8949315712e1facefaaff2ffe)
        100% no-repeat;
      background-size: 100% 100%;
    }
    .item-btm {
      width: 310px;
      height: 280px;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9e03afdd0c0795b582f2a70eae8ed700f8c1834a115521eb01aa27a2e2bd23f1)
        100% no-repeat;
      background-size: 100% 100%;
    }
  }
  .box {
    width: 518px;

    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng22ab3f090cc1030c0b73af8d8ebf0b8a5597fbaedf5c24f64e98e9543c72f7de)
      100% no-repeat;
    background-size: 100% 100%;
    .title {
      height: 36px;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09c733020e86fa1286f18d88c6b4e1ea402603cc442f3e6c6db2561a9a093e81) -9px -9px
        no-repeat;
      background-size: 536px 54px;
      width: 518px;
      .title-font {
        width: 72px;
        height: 18px;
        color: rgba(234, 249, 254, 1);
        font-size: 18px;
        font-weight: 700;
        line-height: 36px;
        margin-left: 14px;
      }
    }
    .list {
      display: flex;
      justify-content: space-between;
      .list-icon-top {
        margin-top: 24px;
      }
      .list-icon {
        display: flex;
        align-items: center;

        height: 14px;
        padding: 0 14px 0;
        margin-bottom: 15px;
        .red {
          background-color: rgba(224, 32, 32, 1);
        }
        .blue {
          background-color: rgba(32, 64, 124, 1);
        }
        .box_16 {
          border-radius: 50%;
          width: 10px;
          height: 10px;
          margin-top: 2px;
        }
        .list-name {
          height: 14px;
          overflow-wrap: break-word;
          color: rgba(234, 249, 254, 1);
          font-size: 14px;
          margin-left: 10px;
          line-height: 21px;
        }
      }
      .text-style {
        color: rgba(234, 249, 254, 1);
        display: flex;
        align-items: center;
        //   font-size: 14px;
        .value {
          width: 38px;
          color: rgba(0, 145, 255, 1);
          font-size: 14px;
          font-weight: 700;
          text-align: left;
          margin-right: 5px;
        }
      }
      .list-left {
      }
    }
  }
}
</style>
