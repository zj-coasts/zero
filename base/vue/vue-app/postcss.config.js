

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      // rootValue({ file }) { // 预算单位 pc端一般为37.5，移动端为16或32
      //   console.log('处理css文件', file)
      //   return file.indexOf('vant') !== -1 ? 10 : 10
      // },
      propList: ['*'], // 需要转换的文件列表
      // exclude: [], // 不需要转换的文件列表
      unitPrecision: 5
    },
    // 'autoprefixer': {
    // overrideBrowserList: [
    //   "Android 4.1",
    //   "iOS 7.1",
    //   "Chrome > 31",
    //   "ff > 31",
    //   "ie >= 8",
    //   "last 10 versions"
    // ],
    // grid: true
  // }
  }
}
