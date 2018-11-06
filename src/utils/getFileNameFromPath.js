const fileRegex = /[\\/]{1}(\w+)\.\w+/i;
export default filePath => filePath.match(fileRegex)[1];
