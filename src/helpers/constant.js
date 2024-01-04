const CHUNKNAME = 'miniplugin_chunk_name_'
const SUFFIXLIST = [".wxml", ".wxss", '.less', ".json", ".js", ".ts", '.scss'];
const SCRIPTSUFFIX = /\.(js|ts)$/
const JSONSUFFIX = /\.json$/
const WXMLSUFFIX = /\.wxml$/
const LOADER_ACCEPT_FILE_EXTS = ['.wxs'];
// 相对路径
const RELATIVEPATH = /^(\.\/|\.\.\/)/


module.exports = {
    CHUNKNAME,
    SUFFIXLIST,
    SCRIPTSUFFIX,
    JSONSUFFIX,
    WXMLSUFFIX,
    LOADER_ACCEPT_FILE_EXTS,
    RELATIVEPATH
}