let cp=require('child_process')

// cp.execSync('calc')
// cp.execSync('start chrome http://youtube.com')
console.log( cp.execSync('node demo.js').toString() );
