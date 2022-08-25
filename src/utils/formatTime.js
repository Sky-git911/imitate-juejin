// 将时间戳转为距今多久
function timeInterval(time) {
  if (!time) time = Number(new Date());
  // 如果time长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (time.toString().length == 10) time *= 1000;
  let timestamp = +new Date(Number(time));

  let timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  let tips = "";
  switch (true) {
    case timer < 300:
      tips = "刚刚";
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + "分钟前";
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + "小时前";
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + "天前";
      break;
    default:
      if (timer >= 2592000 && timer < 365 * 86400) {
        tips = parseInt(timer / (86400 * 30)) + "个月前";
      } else {
        tips = parseInt(timer / (86400 * 365)) + "年前";
      }
  }
  return tips;
}

export default {
  timeInterval,
};
