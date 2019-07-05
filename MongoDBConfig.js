/**
 * MongoDB数据库配置信息
 * db.createUser({user:"root",pwd:"root",roles:[{role:"root", db:"admin"}]})
 * mongo
 * use admin
 * db.auth("root","root")
 * show dbs
 * use puppeteer
 * db.createUser({user:"test",pwd:"test",roles:[{role:"read", db:"puppeteer"}]})
 * show collections
 * db.interface.remove({})
 * db.coverage.remove({})
 * db.interfaceExec.remove({})
 */
module.exports = {
	url: 'mongodb://root:root@localhost:27017/',
	db:'puppeteer',
	coverage_collection:'coverage',
	interface_collection:'interface',
	interfaceExec_collection:'interfaceExec',
	demo_collection:'demo'
};