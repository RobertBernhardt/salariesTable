export const formatNumber = number => {
    let result = "";
    let afterCom = "";
    if ((number - Math.floor(number)) > 0) {
      let com = (number - Math.floor(number)) * 100;
      com = Math.floor(com);
      afterCom = "." + com;
    }
    let rest = Math.floor(number);
    let lengthNum = Math.floor(number).toString().length;
    for (let i = lengthNum; i > 3; i -= 3) {
      let newNum = rest % 1000;
      if (newNum === 0) {
        newNum = "000";
      } else if (newNum < 10) {
        newNum = "00" + newNum;
      } else if (newNum < 100) {
        newNum = "0" + newNum;
      }
      result = ',' + newNum + result;
      rest = Math.floor(rest / 1000);
    }
    result = rest + result + afterCom;
    return result;
  }
  
  export default formatNumber;
  