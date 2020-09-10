// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'production-adb14e'
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  
  const { search } = event
  return await db.collection('garbages').where({
    name: db.RegExp({
      regexp: search,
      options: 'i',
    })
  }).get()
}