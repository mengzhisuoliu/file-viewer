module.exports = function renamePdfjsWebpackRequire(source) {
  const normalizedPath = this.resourcePath.replace(/\\/g, '/')
  const shouldPatch =
    /\/pdfjs-dist\/legacy\/build\/pdf\.mjs$/.test(normalizedPath) ||
    /\/pdfjs-dist\/legacy\/web\/pdf_viewer\.mjs$/.test(normalizedPath)

  if (!shouldPatch) {
    return source
  }

  return source.replace(/\b__webpack_require__\b/g, '__pdfjs_webpack_require__')
}
