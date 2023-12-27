<template>
  <div class="content">
    <div class="back-line"></div>

    <div class="ship">
      <div class="ship-top">
        <div class="ship-box">
          <img
            class="box"
            referrerpolicy="no-referrer"
            src="../../assets/ship.png"
          />
          <div class="video1">
            <div>1</div>
          </div>
          <div class="video2">
            <div>2</div>
          </div>
          <div class="video3">
            <div>3</div>
          </div>
          <div class="video4">
            <div>4</div>
          </div>
          <div class="video5">
            <div>5</div>
          </div>

          <div class="ship-back">
            <div class="video6">
              <div>6</div>
            </div>
            <div class="video7">
              <div>7</div>
            </div>
            <div class="video8">
              <div>8</div>
            </div>
            <div class="video9">
              <div>9</div>
            </div>
            <div class="video10">
              <div>10</div>
            </div>
          </div>

          <div class="ship-bottom">
            <div class="video-back ship-bottom-left">
              <span class="top"><span>船艉右前</span> </span>
              <span class="bottom"><span>全景右前</span></span>
            </div>

            <div class="video-back ship-bottom-right">
              <span class="top"><span>船艉右后</span> </span>
              <span class="bottom"><span>全景右后</span></span>
            </div>
          </div>

          <div class="ship-top-item">
            <div class="video-back ship-top-left">
              <span class="top"><span>船艉左前</span> </span>
              <span class="bottom"><span>全景左前</span></span>
            </div>

            <div class="video-back ship-top-right">
              <span class="top"><span>船艉左后</span> </span>
              <span class="bottom"><span>全景左后</span></span>
            </div>
          </div>

          <div class="ship-left">
            <div class="ship-left-top">
              <div class="video-back item">
                <span class="top"><span>船艉左后</span> </span>
                <span class="bottom"><span>全景左后</span></span>
              </div>
              <div class="font">盲区</div>
            </div>

            <div class="ship-left-mid">
              <div class="top-font">盲区</div>

              <div class="video-back item">
                <span class="top"><span>船艉</span> </span>
                <span class="bottom"><span>全景照</span></span>
              </div>
              <div class="bottom-font">盲区</div>
            </div>

            <div class="ship-left-bottom">
              <div class="video-back item">
                <span class="top"><span>船艉右后</span> </span>
                <span class="bottom"><span>全景右后</span></span>
              </div>
              <div class="font">盲区</div>
            </div>
          </div>

          <div class="video1-locate">
            <div class="video-back item">
              <span class="top"><span>船艉左前</span> </span>
              <span class="bottom"><span>全景左前</span></span>
            </div>
          </div>
          <div class="video2-locate">
            <div class="left-font">盲区</div>
            <div class="video-back item">
              <span class="top"><span>船艉左前</span> </span>
              <span class="bottom"><span>全景左前</span></span>
            </div>
            <div class="right-font">盲区</div>
          </div>

          <div class="video3-locate">
            <div class="left-font">盲区</div>
            <div class="video-back item">
              <span class="top"><span>船艉左前</span> </span>
              <span class="bottom"><span>全景左前</span></span>
            </div>
            <div class="right-font">盲区</div>
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
      alertShow: false,
      locateShow: false,
      value1: "",
      msg: "video",
      path: "../../assets/",
      img: [
        "menu",
        "voyage",
        "communicate",
        "locate",
        "menuvideo",
        "device",
        "alarm",
        "log",
        "report",
      ],

      value: "",
    };
  },
  mounted() {},
  methods: {
    goto(e) {
      if (this.$route.path === e || !e) return;
      this.$router.push(e);
    },

    

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  flex: 1;
  display: flex;
  position: relative;
  .back-line {
    border-radius: 280px;
    position: absolute;
    // left: 0;
    // top: 29px;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(25, 54, 106, 1);
  }
  .model {
    position: absolute;
    left: 70px;
    top: 4px;
    width: 620px;
    height: 190px;
    background: url(../../assets/shipBack.png) 100% no-repeat;
    background-size: 100% 100%;
  }

  .ship {
    position: relative;
    width: 1022px;
    height: 639px;
    margin: 48px 0 0 369px;

    .ship-top {
      position: relative;
      width: 1022px;
      height: 391px;
      margin-top: 248px;
      .ship-box {
        position: absolute;
        left: 70px;
        top: 4px;
        width: 620px;
        height: 190px;
        background: url(../../assets/shipBack.png) 100% no-repeat;
        background-size: 100% 100%;
        .box {
          width: 348px;
          height: 140px;
          margin: 25px 0 0 142px;
        }
        .video1 {
          background: url(../../assets/video1.png) 100% no-repeat;
          width: 28px;
          height: 20px;
          position: absolute;
          color: rgba(0, 145, 255, 1);
          font-size: 14px;
          right: 6px;
          top: 80px;
          div {
            margin-left: 3px;
          }
        }
        .video2 {
          height: 34px;
          background: url(../../assets/video2.png) 0px 0px no-repeat;
          background-size: 32px 34px;
          width: 31px;
          position: absolute;
          color: rgba(0, 145, 255, 1);
          font-size: 14px;
          right: 60px;
          top: 30px;
          div {
            margin: 7px 0px 0px 6px;
          }
        }
        .video3 {
          background: url(../../assets/video3.png) -1px 0px no-repeat;
          height: 32px;
          color: rgba(0, 145, 255, 1);
          background-size: 27px 32px;
          width: 26px;
          right: 60px;
          bottom: 30px;
          position: absolute;
          div {
            margin: 7px 0px 0px 6px;
          }
        }
        .video4 {
          background: url(../../assets/video4.png) -1px 0px no-repeat;
          height: 34px;
          background-size: 35px 34px;
          width: 34px;
          right: 110px;
          color: rgba(0, 145, 255, 1);
          top: 0px;
          position: absolute;
          div {
            margin: 7px 0px 0px 11px;
          }
        }
        .video5 {
          background: url(../../assets/video5.png) 0px 0px no-repeat;
          height: 34px;
          background-size: 32px 34px;
          color: rgba(0, 145, 255, 1);
          width: 31px;
          position: absolute;
          right: 110px;
          bottom: 0px;
          div {
            margin: 5px 0px 0px 11px;
          }
        }

        .ship-back {
          background-color: rgba(32, 45, 87, 1);
          height: 150px;
          width: 45px;
          position: absolute;
          top: 50%;
          left: -45.6px;
          transform: translateY(-50%);

          .video6 {
            background: url(../../assets/video6.png) -1px 0px no-repeat;
            height: 34px;
            color: rgba(0, 145, 255, 1);
            background-size: 35px 34px;
            width: 34px;
            position: absolute;
            left: 18px;
            top: -25px;
            div {
              margin: 8px 0px 0px 9px;
            }
          }
          .video7 {
            background: url(../../assets/video7.png) -1px 0px no-repeat;
            color: rgba(0, 145, 255, 1);
            height: 34px;
            background-size: 35px 34px;
            width: 34px;
            position: absolute;
            left: 18px;
            bottom: -25px;
            div {
              margin: 8px 0px 0px 9px;
            }
          }
          .video8 {
            background: url(../../assets/video8.png) -1px 0px no-repeat;
            height: 31px;
            color: rgba(0, 145, 255, 1);
            background-size: 35px 32px;
            width: 34px;
            position: absolute;
            left: -25px;
            top: -25px;
            div {
              margin: 8px 0px 0px 11px;
            }
          }
          .video9 {
            background: url(../../assets/video9.png) -1px 0px no-repeat;

            height: 34px;
            color: rgba(0, 145, 255, 1);
            background-size: 35px 34px;
            width: 34px;
            position: absolute;
            left: -27px;
            bottom: -25px;
            div {
              margin: 8px 0px 0px 9px;
            }
          }

          .video10 {
            background: url(../../assets/video10.png) 100% no-repeat;
            background-size: 35px 34px;
            height: 20px;
            color: rgba(0, 145, 255, 1);
            background-size: 100% 100%;
            width: 28px;

            margin-top: 65px;
            div {
              margin-left: 6px;
            }
          }
        }
        .video-back {
          width: 220px;
          height: 160px;
          color: white;
          background: url(../../assets/viewVideoBack.png) 100% no-repeat;
          background-size: 100% 100%;
          font-size: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: right;
          .top {
            span {
              padding: 2px 10px 2px;
              background-color: rgba(0, 0, 0, 0.7);
            }
          }
          .bottom {
            span {
              padding: 0 10px 0;
            }
          }
        }
        .ship-bottom {
          width: 507px;
          height: 125px;
          background: url(../../assets/shipBottom.png) -1px -1px no-repeat;
          background-size: 509px 126px;
          position: absolute;
          bottom: -125px;
          left: -15px;

          .ship-bottom-left {
            position: absolute;
            left: 17px;
            top: 92px;
          }

          .ship-bottom-right {
            position: absolute;
            left: 287px;
            top: 92px;
          }
        }
        .ship-left {
          background: green;
          position: absolute;
          left: -270px;
          top: -150px;
          .ship-left-top {
            height: 181px;
            background: url(../../assets/videoEight.png) 100% no-repeat;
            background-size: 100% 100%;
            width: 221px;
            position: absolute;
            top: 0;
            left: 0;
            color: white;
            .item {
              margin: -51px 0 0 -59px;
            }
            // margin: -13px 0 0 78px;
            .font {
              position: absolute;
              bottom: 70px;
              right: -26px;
            }
          }

          .ship-left-mid {
            background: url(../../assets/videoTen.png) 100% no-repeat;
            background-size: 100% 100%;
            position: absolute;
            top: 200px;
            left: 140px;
            width: 83px;
            height: 87px;
            color: white;
            .item {
              position: relative;
              right: 220px;
              top: -40px;
              // margin-right: 100px;
            }
            .top-font {
              position: absolute;
              top: -23px;
              left: 30px;
            }
            .bottom-font {
              position: absolute;
              bottom: -23px;
              left: 30px;
            }
          }

          .ship-left-bottom {
            height: 181px;
            background: url(../../assets/videoNine.png) 100% no-repeat;
            background-size: 100% 100%;
            width: 221px;
            position: absolute;
            top: 313px;
            left: 0;
            color: white;
            .item {
              margin: 63px 0 0 -61px;
            }
            .font {
              position: absolute;
              right: -25px;
              top: 60px;
            }
          }
        }
        .ship-top-item {
          position: absolute;
          left: -19px;
          top: -125px;
          width: 507px;
          height: 125px;
          background: url(../../assets/shipTop.png) -1px 0px no-repeat;
          background-size: 509px 126px;

          .ship-top-left {
            position: absolute;
            left: 17px;
            top: -127px;
          }

          .ship-top-right {
            position: absolute;
            left: 287px;
            top: -127px;
          }
        }

        .video3-locate {
          position: absolute;
          background: url(../../assets/videoThree.png) -1px 0px no-repeat;
          width: 258px;
          height: 229px;
          right: -125px;
          bottom: -200px;
          color: white;
          .item {
            margin: 100px 0 0 60px;
          }
          .left-font {
            position: absolute;
            left: 10px;
            top: 50px;
          }
          .right-font {
            position: absolute;
            right: 120px;
            top: 0px;
          }
        }
        .video1-locate {
          height: 483px;
          background: url(../../assets/videoOne.png) -1px -1px no-repeat;
          background-size: 141px 484px;
          width: 140px;
          position: absolute;
          right: -145px;
          top: -135px;
          color: white;
          .item {
            margin: 150px 0 0 110px;
          }
        }
        .video2-locate {
          height: 133px;
          background: url(../../assets/videoTwo.png) -1px -1px no-repeat;
          background-size: 100% 100%;
          width: 190px;
          position: absolute;
          right: -110px;
          top: -105px;
          color: white;
          .item {
            margin: -150px 0 0px 10px;
          }
          .left-font {
            position: absolute;
            left: -40px;
            bottom: 50px;
          }
          .right-font {
            position: absolute;
            right: 100px;
            bottom: -20px;
          }
        }
      }
    }
  }

   
}
</style>
