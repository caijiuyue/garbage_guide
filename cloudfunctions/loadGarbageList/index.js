const cloud = require('wx-server-sdk')
cloud.init({
  env: 'production-adb14e'
})
const db = cloud.database()

exports.main = async (event, context) => {
  let { type } = event
  return await db.collection('garbages').where({
    type: type
  }).get()
}
