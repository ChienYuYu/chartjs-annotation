let testData = {
  dataList:[]
}

function generateRandomStrings(min, max) { 
  if (min > max) { throw new Error('最小值不能大於最大值'); }
  for (let i = 0; i < 481; i++) { 
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    testData.dataList.push(randomNumber.toString()); 
  }
}

const min = 18;
const max = 58; 
generateRandomStrings(min, max); 

module.exports = testData;


