
let testData = {
  dataList:[{dataArr:[]},{dataArr:[]}]
}

function generateRandomStrings1(min, max) { 
  if (min > max) { throw new Error('最小值不能大於最大值'); }
  for (let i = 0; i < 481; i++) { 
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    testData.dataList[0].dataArr.push(randomNumber.toString()); 
  }
}


function generateRandomStrings2(min, max) { 
  if (min > max) { throw new Error('最小值不能大於最大值'); }
  for (let i = 0; i < 481; i++) { 
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    testData.dataList[1].dataArr.push(randomNumber.toString()); 
  }
}

generateRandomStrings1(18, 58); 
generateRandomStrings2(16, 40); 
// generateRandomStrings2(46, 90); 



module.exports = testData;


