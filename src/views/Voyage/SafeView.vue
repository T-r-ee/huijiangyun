<template>
  <div class="content  ">
    <div class="box  ">
      <div class="title  ">
        <span class="title-left">NO</span>
        <span class="title-mid">名称</span>
        <span class="title-right">状态</span>
      </div>
      <div class="list " v-for="(item,index) of deviceLeft" :key="index">
        <span class="list-left">{{index+1}}</span>
        <span class="list-mid">{{item.name}}</span>
        <div :class=" [ 'list-right' , item.status?'red':'blue' ] "></div>
      </div> 
    </div>
     <div class="box  ">
      <div class="title  ">
        <span class="title-left">NO</span>
        <span class="title-mid">名称</span>
        <span class="title-right">状态</span>
      </div>
      <div class="list " v-for="(item,index) of  deviceRight" :key="index">
        <span class="list-left">{{index+1}}</span>
        <span class="list-mid">{{item.name}}</span>
        <div :class=" [ 'list-right' , item.status?'red':'blue' ] "></div>
      </div> 
    </div>
    
  </div>
</template>

          <script>
export default {
  name: "VideoView",
  data() {
    return {
      deviceLeft: [
        { name: "失电报警", status: 1 },
        { name: "泄漏报警", status: 0 },
        { name: "机舱(左)CO2预报營", status: 0 },
        { name: "机舱(左)CO2释放报警", status: 0 },
        { name: "机舱(右)CO2预报警", status: 0 },
        { name: "机舱(右)CO2释放报警", status: 0 },
        { name: "NO.1 货舱CO2预报警", status: 0 },
        { name: "NO.1 货舱CO2释放报警", status: 0 },
        { name: "NO.2 货舱CO2预报警", status: 0 },
        { name: "NO.2 货舱CO2释放报警", status: 0 },
        { name: "NO.3 货舱CO2预报警", status: 0 },
        { name: "NO.3 货舱CO2释放报警", status: 0 },
        { name: "艄部锚絞机公共报警", status: 0 },
        { name: "机舱水雾灭火系统故障", status: 0 },
        { name: "机舱水雾灭火系统火普预报警", status: 0 }
      ],
      deviceRight: [
        { name: "工作空压机公共报警", status: 1 },
        { name: "火警探测和报警系统火灾报警", status: 0 },
        { name: "火警探测和报警系统故障", status: 0 },
        { name: "AMS系統1＃ 电源输入故障", status: 0 },
        { name: "AMS系統2＃ 电源输入故障", status: 0 },
        { name: "AMS系統1＃ UPS电源输出故障", status: 0 },
        { name: "AMS系統2＃ UPS电源输出故障", status: 0 },
        { name: "AMS系统1# DC24V电源故障", status: 0 },
        { name: "AMS系统2# DC24V电源故障", status: 0 },
        { name: "AMS系统1# DC24V绝缘低故障", status: 0 },
        { name: "AMS系统2# DC24V绝缘低故障", status: 0 },
        { name: "AMS系统A网交换机电源故障", status: 0 },
        { name: "AMS系统B网交换机电源故障", status: 0 },
        { name: "机舱集控台AC220V 电源故障", status: 0 },
        { name: "机舱集控台DC24V 电源故障", status: 0 }
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

    toggleHover(e, index) {
      if (e) {
        switch (index) {
          case 3:
            this.menu[index].icon = this.img[index] + "off";
            this.locateShow = true;
            break;
          case 6:
            this.menu[index].icon = this.img[index] + "off";
            this.alarmShow = true;
            break;
          default:
            break;
        }
      } else {
        switch (index) {
          case 3:
            this.menu[index].icon = this.img[index];
            this.locateShow = false;
            break;
          case 6:
            this.menu[index].icon = this.img[index];
            this.alarmShow = false;
            break;
          default:
            break;
        }
      }
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
  flex: 1;
  height: 790px;
  display: flex;
  .box {
    width: 738px;
    height: 100%;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng206cfa2d0e5add74230c1d6cec7dc1ec74e35bbea50cd0bb32b7423858f16e16)
      100% no-repeat;
    background-size: 100% 100%;
    .title {
      width: 738px;
      height: 36px;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng443a03cf0430037d20442b54a6529bcdd38b4bcffeb489980ca2de808265114f) -9px -9px
        no-repeat;
      background-size: 756px 54px;
      display: flex;
      align-items: center;
      .title-left {
        width: 28px;
        height: 18px;
        overflow-wrap: break-word;
        color: rgba(234, 249, 254, 1);
        font-size: 18px;
        font-family: SourceHanSansCN-Bold;
        font-weight: 700;
        text-align: left;
        white-space: nowrap;
        line-height: 27px;
        margin-left:  34px;
      }
      .title-mid {
        width: 36px;
        height: 18px;
        overflow-wrap: break-word;
        color: rgba(234, 249, 254, 1);
        font-size: 18px;
        font-family: SourceHanSansCN-Bold;
        font-weight: 700;
        text-align: left;
        white-space: nowrap;
        line-height: 27px;
        margin-left:  216px;
      }
      .title-right {
        width: 36px;
        height: 18px;
        color: rgba(234, 249, 254, 1);
        font-size: 18px;
        font-weight: 700;
          margin-left: 354px;
      }
    }
    .list {
      display: flex;
      width: 738px;
      height: 36px;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng09e681bfe1351177f1ec1b35b8b68fa415e0d6b21d138029c06c93077f62c84f)
        100% no-repeat;
      background-size: 100% 100%;
      .list-left {
        width: 8px;
        height: 14px;
        overflow-wrap: break-word;
        color: rgba(234, 249, 254, 1);
        font-size: 14px;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 21px;
        margin: 13px 0 0 34px;
      }
      .list-mid {
        width: 86px;
        height: 14px;
        overflow-wrap: break-word;
        color: rgba(234, 249, 254, 1);
        font-size: 14px;
        font-family: SourceHanSansCN-Regular;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        line-height: 21px;
        margin: 13px 0 0 236px;
      }
      .list-right {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        margin: 9px 34px 0 304px;
      }
      .red {
        background-color: rgba(224, 32, 32, 1);
      }
      .blue {
        background-color: rgba(32, 64, 124, 1);
      }
    }
     
  }
}
</style>
