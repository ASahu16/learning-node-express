// The `node:path` module provides utilities for working with file and directory paths. 
// It can be accessed using:
const path = require('path');

/**
 * `path.sep` provides the platform-specific path segment separator:
 * `\` on Windows
 * `/` on POSIX
 */
console.log(path.sep);


/**
 * The path.join() method joins all given path segments together 
 * using the platform-specific separator as a delimiter, 
 * then normalizes the resulting path.
 * 
 * Below code prints: `/content/subfolder/test.txt` onl linux
 * You can see that it removed the extra separator passed to it.
 */
const filePath = path.join('/content//', 'subfolder','test.txt')
console.log(filePath);

/**
 * The path.basename() method returns the last portion of a path, 
 * similar to the Unix basename command.
 * 
 * Below code prints: 'test.txt'
 */
console.log(path.basename(filePath))

/**
 * The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
 * The given sequence of paths is processed from right to left, 
 * with each subsequent path prepended until an absolute path is constructed. 
 * For instance, given the sequence of path segments: /foo, /bar, baz, 
 * calling path.resolve('/foo', '/bar', 'baz') would return /bar/baz 
 * because 'baz' is not an absolute path but '/bar' + '/' + 'baz' is.
 * 
 * path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
 * // If the current working directory is /home/myself/node,
 * // this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
 * 
 */
console.log(path.resolve(__dirname, 'content', 'subfolder', 'test.txt')) // eslint-disable-line no-undef