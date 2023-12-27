<template>
  <div class="content">
    <div class="box">
      <div class="title">
        <span class="title-value">燃油</span>
      </div>
      <div class="list">
        <div class="image-text_9" v-for="(item,index) of deviceLeft" :key="index">
          <div class="group_14">
            <div class="image-text_10 justify-between">
              <div class="group_15 flex-col">
                <div class="box_20 flex-col"></div>
              </div>
              <div class="text-group_9  "  >
                <div class="text_58" v-for="(msg,i) of item.value" :key=i>{{msg}}</div>
                <!-- <span class="text_59">3.0&nbsp;m</span>
                <span class="text_60">44.8&nbsp;%</span>
                <span class="text_61">36.2&nbsp;m³</span> -->
              </div>
            </div>
          </div>
          <div class="text-group_11">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="title">
        <span class="title-value">淡水</span>
      </div>
        <div class="list">
        <div class="image-text_9" v-for="(item,index) of deviceRight" :key="index">
          <div class="group_14">
            <div class="image-text_10 justify-between">
              <div class="group_16 flex-col">
                <!-- <div class="box_20 flex-col"></div> -->
              </div>
              <div class="text-group_9  "  >
                <div class="text_58" v-for="(msg,i) of item.value" :key=i>{{msg}}</div>
                
              </div>
            </div>
          </div>
          <div class="text-group_11">{{item.name}}</div>
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
      deviceLeft: [
        { name: "NO.1 燃科油舱(P)", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "NO.1燃料油舱(S)", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "燃科油清舱(P)", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "燃料油橙清舱(S)", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "燃科油日用舱(P)", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "燃料油日用舱(S)", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "燃料溢油舱", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "轻柴油舵", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "轻柴油橙清舱(P)", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "轻柴油橙清舱(S)", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "轻柴油日用舱 (P)", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "轻柴油日用能(S)", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "艄部锚絞机公共报警", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "柴油泄放舱", value: ['10.0°C','3.0 m','44.8 %','362 m³'] } 
      ],
      deviceRight: [
         { name: "淡水舱", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "水舱(S)", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        { name: "淡水屏蔽舱(P)", value: ['10.0°C','3.0 m','44.8 %','362 m³'] },
        
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
  display: flex;
  .box {
    width: 738px;
    height: 790px;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng206cfa2d0e5add74230c1d6cec7dc1ec74e35bbea50cd0bb32b7423858f16e16)
      100% no-repeat;
    background-size: 100% 100%;
    .title {
      height: 36px;
      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngabb4a9deaf29f7c0f8e7d019d1cf61cd7633d19805527723fbcbdb79f5d3de9f) -9px -9px
        no-repeat;
      background-size: 756px 54px;
      width: 738px;

      .title-value {
        width: 36px;
        height: 18px;
        overflow-wrap: break-word;
        color: rgba(234, 249, 254, 1);
        font-size: 18px;
        font-weight: 700;
        line-height: 36px;
        margin-left: 14px;
      }
    }
    .list {
      display: grid;
      grid-template-columns: repeat(5, 1fr); /* 定义五列，每列宽度平均分配 */
      grid-template-rows: repeat(3, auto); /* 定义三行，行高自适应内容 */
      grid-gap: 10px; /* 设置行间距和列间距为 10px */
      padding: 15px 10px 10px;
      box-sizing: border-box;
      .image-text_9 {
        width: 130px;
        height: 188px;
        margin-bottom: 10px;
        .group_14 {
          position: relative;
          width: 130px;
          height: 160px;
          border: 1px solid rgba(32, 64, 124, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          .image-text_10 {
            width: 86px;
            height: 120px;
            display: flex;
            justify-content: space-between;
            // align-items: center;
            // margin: 20px 0 0 25px;
            .group_15 {
              background-color: rgba(32, 64, 124, 1);
              height: 120px;
              width: 10px;
              .box_20 {
                background-color: rgba(0, 145, 255, 1);
                width: 10px;
                height: 50px; 
              }
            }
            .group_16 {
              background-color: rgba(68, 215, 182, 1);
              height: 120px;
              width: 10px;
              
            }
            .text-group_9 {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              width: 56px;
              height: 120px;
              .text_58 {
                width: 56px;
                height: 14px;
                overflow-wrap: break-word;
                color: rgba(234, 249, 254, 1);
                font-size: 14px;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: left;
                white-space: nowrap;
                line-height: 21px;
              }
              .text_59 {
                width: 36px;
                height: 14px;
                overflow-wrap: break-word;
                color: rgba(234, 249, 254, 1);
                font-size: 14px;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: left;
                white-space: nowrap;
                line-height: 21px;
                margin-top: 21px;
              }
              .text_60 {
                width: 44px;
                height: 14px;
                overflow-wrap: break-word;
                color: rgba(234, 249, 254, 1);
                font-size: 14px;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: left;
                white-space: nowrap;
                line-height: 21px;
                margin-top: 22px;
              }
              .text_61 {
                width: 50px;
                height: 14px;
                overflow-wrap: break-word;
                color: rgba(234, 249, 254, 1);
                font-size: 14px;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: left;
                white-space: nowrap;
                line-height: 21px;
                margin-top: 21px;
              }
            }
          }
          .image-text_11 {
            position: absolute;
            left: 25px;
            top: 20px;
            width: 86px;
            height: 120px;
            .group_15 {
              background-color: rgba(32, 64, 124, 1);
              height: 120px;
              width: 10px;
              .box_20 {
                background-color: rgba(0, 145, 255, 1);
                width: 10px;
                height: 50px;
                margin-top: 70px;
              }
            }
            .text-group_10 {
              width: 56px;
              height: 120px;
              .text_58 {
                width: 56px;
                height: 14px;
                overflow-wrap: break-word;
                color: rgba(234, 249, 254, 1);
                font-size: 14px;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: left;
                white-space: nowrap;
                line-height: 21px;
              }
              .text_59 {
                width: 36px;
                height: 14px;
                overflow-wrap: break-word;
                color: rgba(234, 249, 254, 1);
                font-size: 14px;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: left;
                white-space: nowrap;
                line-height: 21px;
                margin-top: 21px;
              }
              .text_60 {
                width: 44px;
                height: 14px;
                overflow-wrap: break-word;
                color: rgba(234, 249, 254, 1);
                font-size: 14px;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: left;
                white-space: nowrap;
                line-height: 21px;
                margin-top: 22px;
              }
              .text_61 {
                width: 50px;
                height: 14px;
                overflow-wrap: break-word;
                color: rgba(234, 249, 254, 1);
                font-size: 14px;
                font-family: SourceHanSansCN-Regular;
                font-weight: normal;
                text-align: left;
                white-space: nowrap;
                line-height: 21px;
                margin-top: 21px;
              }
            }
          }
        }
        .text-group_11 {
          width: 110px;
          height: 14px;
          overflow-wrap: break-word;
          color: rgba(234, 249, 254, 1);
          font-size: 14px;
          font-family: SourceHanSansCN-Regular;
          font-weight: normal;
          text-align: center;
          white-space: nowrap;
          line-height: 21px;
          margin: 14px 0 0 10px;
        }
      }
    }
  }
}
</style>
