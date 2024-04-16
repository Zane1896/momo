/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=10545745&pid=5441d412e9aeb50b6108af0b1489dc02&tid=752d7168a53a61992d749594ab6e36a8",
    "https://www.maimemo.com/share/page?uid=10545745&pid=5441d412e9aeb50b6108af0b1489dc02&tid=752d7168a53a61992d749594ab6e36a8",
    "https://www.maimemo.com/share/page?uid=10545745&pid=5441d412e9aeb50b6108af0b1489dc02&tid=752d7168a53a61992d749594ab6e36a8",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=10545745&pid=5441d412e9aeb50b6108af0b1489dc02&tid=752d7168a53a61992d749594ab6e36a8",
    "https://www.maimemo.com/share/page?uid=10545745&pid=5441d412e9aeb50b6108af0b1489dc02&tid=752d7168a53a61992d749594ab6e36a8",
    "https://www.maimemo.com/share/page?uid=10545745&pid=5441d412e9aeb50b6108af0b1489dc02&tid=752d7168a53a61992d749594ab6e36a8",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
