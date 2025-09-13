// ; The function that you have to write accepts two list/array, xxx and yyy, representing the coordinates of the points to regress (so that, for example, the first point has coordinates (x[0], y[0])).

// ; Your Function should return a tuple (in Python) or an array (any other language) of two elements: a (intercept) and b (slope) in this order.

// ; You must round your result to the first 4 decimal digits
// ; Formula:

// ; xix_ixi​ and yiy_iyi​ is xxx and yyy co-ordinate of iii-th point;
// ; nnn is length of input.

// ; a=∑xi2⋅∑yi−∑xi⋅∑xiyin∑xi2−(∑xi)2a = \dfrac{\sum x_i^2\cdot \sum y_i - \sum x_i \cdot\sum x_iy_i}{n\sum x_i^2 - (\sum x_i)^2}a=n∑xi2​−(∑xi​)2∑xi2​⋅∑yi​−∑xi​⋅∑xi​yi​​

// ; b=n∑xiyi−∑xi⋅∑yin∑xi2−(∑xi)2b = \dfrac{n\sum x_i y_i - \sum x_i \cdot \sum y_i}{n\sum x^2_i - (\sum x_i)^2}b=n∑xi2​−(∑xi​)2n∑xi​yi​−∑xi​⋅∑yi​​
// ; Examples:

// ; regression_line([25,30,35,40,45,50], [78,70,65,58,48,42]) === [114.381, -1.4457]

// ; regressionLine([56,42,72,36,63,47,55,49,38,42,68,60], [147,125,160,118,149,128,150,145,115,140,152,155]) === [80.7777, 1.138]

function regression_line(array){
  const x = array[0], y = array[1];
  const xSquareSumm = x.reduce((summ, currValue) => summ + currValue**2, 0)
  const ySumm = y.reduce((summ, currValue) => summ + currValue,0)
  const xSumm = x.reduce((summ, currValue) => summ + currValue,0)
  
  let xySumm = 0;
  x.forEach((element, index) => {
    xySumm += element * y[index];
  });
  
  return [
    parseFloat(((xSquareSumm*ySumm-xSumm*xySumm)/(x.length*xSquareSumm-((xSumm)**2))).toFixed(3).toString()),
    parseFloat(((x.length*xySumm-xSumm*ySumm)/(x.length*xSquareSumm-((xSumm)**2))).toFixed(3).toString())
  ];
}


task = {
    description: `The function that you have to write accepts two list/array, 
    xxx and yyy, representing the coordinates of the points to regress 
    (so that, for example, the first point has coordinates (x[0], y[0])). <br>
    Function should return a tuple (in Python) or an array (any other language) 
    of two elements: a (intercept) and b (slope) in this order. <br>
    Round your result to the first 4 decimal digits <br>
    `,
    tests: [
      [[25,30,35,40,45,50],[78,70,65,58,48,42]],
      [[56,42,72,36,63,47,55,49,38,42,68,60],[147,125,160,118,149,128,150,145,115,140,152,155]],
      [[0, 0, 0, 2, 4, 5, 6, 7, 10],[16, 17, 20, 25, 60, 61, 62, 67, 68]]
    ],
    results: [],
    getResults(func) {
        this.tests.forEach(test => {
            this.results.push(func(test))
        })
    },
    output: `N/A`
}
task.getResults(regression_line)