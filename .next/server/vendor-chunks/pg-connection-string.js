"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/pg-connection-string";
exports.ids = ["vendor-chunks/pg-connection-string"];
exports.modules = {

/***/ "(rsc)/./node_modules/pg-connection-string/index.js":
/*!****************************************************!*\
  !*** ./node_modules/pg-connection-string/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n//Parse method copied from https://github.com/brianc/node-postgres\n//Copyright (c) 2010-2014 Brian Carlson (brian.m.carlson@gmail.com)\n//MIT License\n\n//parses a connection string\nfunction parse(str) {\n  //unix socket\n  if (str.charAt(0) === '/') {\n    const config = str.split(' ')\n    return { host: config[0], database: config[1] }\n  }\n\n  // Check for empty host in URL\n\n  const config = {}\n  let result\n  let dummyHost = false\n  if (/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(str)) {\n    // Ensure spaces are encoded as %20\n    str = encodeURI(str).replace(/\\%25(\\d\\d)/g, '%$1')\n  }\n\n  try {\n    result = new URL(str, 'postgres://base')\n  } catch (e) {\n    // The URL is invalid so try again with a dummy host\n    result = new URL(str.replace('@/', '@___DUMMY___/'), 'postgres://base')\n    dummyHost = true\n  }\n\n  // We'd like to use Object.fromEntries() here but Node.js 10 does not support it\n  for (const entry of result.searchParams.entries()) {\n    config[entry[0]] = entry[1]\n  }\n\n  config.user = config.user || decodeURIComponent(result.username)\n  config.password = config.password || decodeURIComponent(result.password)\n\n  if (result.protocol == 'socket:') {\n    config.host = decodeURI(result.pathname)\n    config.database = result.searchParams.get('db')\n    config.client_encoding = result.searchParams.get('encoding')\n    return config\n  }\n  const hostname = dummyHost ? '' : result.hostname\n  if (!config.host) {\n    // Only set the host if there is no equivalent query param.\n    config.host = decodeURIComponent(hostname)\n  } else if (hostname && /^%2f/i.test(hostname)) {\n    // Only prepend the hostname to the pathname if it is not a URL encoded Unix socket host.\n    result.pathname = hostname + result.pathname\n  }\n  if (!config.port) {\n    // Only set the port if there is no equivalent query param.\n    config.port = result.port\n  }\n\n  const pathname = result.pathname.slice(1) || null\n  config.database = pathname ? decodeURI(pathname) : null\n\n  if (config.ssl === 'true' || config.ssl === '1') {\n    config.ssl = true\n  }\n\n  if (config.ssl === '0') {\n    config.ssl = false\n  }\n\n  if (config.sslcert || config.sslkey || config.sslrootcert || config.sslmode) {\n    config.ssl = {}\n  }\n\n  // Only try to load fs if we expect to read from the disk\n  const fs = config.sslcert || config.sslkey || config.sslrootcert ? __webpack_require__(/*! fs */ \"fs\") : null\n\n  if (config.sslcert) {\n    config.ssl.cert = fs.readFileSync(config.sslcert).toString()\n  }\n\n  if (config.sslkey) {\n    config.ssl.key = fs.readFileSync(config.sslkey).toString()\n  }\n\n  if (config.sslrootcert) {\n    config.ssl.ca = fs.readFileSync(config.sslrootcert).toString()\n  }\n\n  switch (config.sslmode) {\n    case 'disable': {\n      config.ssl = false\n      break\n    }\n    case 'prefer':\n    case 'require':\n    case 'verify-ca':\n    case 'verify-full': {\n      break\n    }\n    case 'no-verify': {\n      config.ssl.rejectUnauthorized = false\n      break\n    }\n  }\n\n  return config\n}\n\nmodule.exports = parse\n\nparse.parse = parse\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcGctY29ubmVjdGlvbi1zdHJpbmcvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxRUFBcUUsbUJBQU8sQ0FBQyxjQUFJOztBQUVqRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9vbWJvb2tlci8uL25vZGVfbW9kdWxlcy9wZy1jb25uZWN0aW9uLXN0cmluZy9pbmRleC5qcz8yYWMyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG4vL1BhcnNlIG1ldGhvZCBjb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYnJpYW5jL25vZGUtcG9zdGdyZXNcbi8vQ29weXJpZ2h0IChjKSAyMDEwLTIwMTQgQnJpYW4gQ2FybHNvbiAoYnJpYW4ubS5jYXJsc29uQGdtYWlsLmNvbSlcbi8vTUlUIExpY2Vuc2VcblxuLy9wYXJzZXMgYSBjb25uZWN0aW9uIHN0cmluZ1xuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIC8vdW5peCBzb2NrZXRcbiAgaWYgKHN0ci5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgIGNvbnN0IGNvbmZpZyA9IHN0ci5zcGxpdCgnICcpXG4gICAgcmV0dXJuIHsgaG9zdDogY29uZmlnWzBdLCBkYXRhYmFzZTogY29uZmlnWzFdIH1cbiAgfVxuXG4gIC8vIENoZWNrIGZvciBlbXB0eSBob3N0IGluIFVSTFxuXG4gIGNvbnN0IGNvbmZpZyA9IHt9XG4gIGxldCByZXN1bHRcbiAgbGV0IGR1bW15SG9zdCA9IGZhbHNlXG4gIGlmICgvIHwlW15hLWYwLTldfCVbYS1mMC05XVteYS1mMC05XS9pLnRlc3Qoc3RyKSkge1xuICAgIC8vIEVuc3VyZSBzcGFjZXMgYXJlIGVuY29kZWQgYXMgJTIwXG4gICAgc3RyID0gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvXFwlMjUoXFxkXFxkKS9nLCAnJSQxJylcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmVzdWx0ID0gbmV3IFVSTChzdHIsICdwb3N0Z3JlczovL2Jhc2UnKVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gVGhlIFVSTCBpcyBpbnZhbGlkIHNvIHRyeSBhZ2FpbiB3aXRoIGEgZHVtbXkgaG9zdFxuICAgIHJlc3VsdCA9IG5ldyBVUkwoc3RyLnJlcGxhY2UoJ0AvJywgJ0BfX19EVU1NWV9fXy8nKSwgJ3Bvc3RncmVzOi8vYmFzZScpXG4gICAgZHVtbXlIb3N0ID0gdHJ1ZVxuICB9XG5cbiAgLy8gV2UnZCBsaWtlIHRvIHVzZSBPYmplY3QuZnJvbUVudHJpZXMoKSBoZXJlIGJ1dCBOb2RlLmpzIDEwIGRvZXMgbm90IHN1cHBvcnQgaXRcbiAgZm9yIChjb25zdCBlbnRyeSBvZiByZXN1bHQuc2VhcmNoUGFyYW1zLmVudHJpZXMoKSkge1xuICAgIGNvbmZpZ1tlbnRyeVswXV0gPSBlbnRyeVsxXVxuICB9XG5cbiAgY29uZmlnLnVzZXIgPSBjb25maWcudXNlciB8fCBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0LnVzZXJuYW1lKVxuICBjb25maWcucGFzc3dvcmQgPSBjb25maWcucGFzc3dvcmQgfHwgZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdC5wYXNzd29yZClcblxuICBpZiAocmVzdWx0LnByb3RvY29sID09ICdzb2NrZXQ6Jykge1xuICAgIGNvbmZpZy5ob3N0ID0gZGVjb2RlVVJJKHJlc3VsdC5wYXRobmFtZSlcbiAgICBjb25maWcuZGF0YWJhc2UgPSByZXN1bHQuc2VhcmNoUGFyYW1zLmdldCgnZGInKVxuICAgIGNvbmZpZy5jbGllbnRfZW5jb2RpbmcgPSByZXN1bHQuc2VhcmNoUGFyYW1zLmdldCgnZW5jb2RpbmcnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuICBjb25zdCBob3N0bmFtZSA9IGR1bW15SG9zdCA/ICcnIDogcmVzdWx0Lmhvc3RuYW1lXG4gIGlmICghY29uZmlnLmhvc3QpIHtcbiAgICAvLyBPbmx5IHNldCB0aGUgaG9zdCBpZiB0aGVyZSBpcyBubyBlcXVpdmFsZW50IHF1ZXJ5IHBhcmFtLlxuICAgIGNvbmZpZy5ob3N0ID0gZGVjb2RlVVJJQ29tcG9uZW50KGhvc3RuYW1lKVxuICB9IGVsc2UgaWYgKGhvc3RuYW1lICYmIC9eJTJmL2kudGVzdChob3N0bmFtZSkpIHtcbiAgICAvLyBPbmx5IHByZXBlbmQgdGhlIGhvc3RuYW1lIHRvIHRoZSBwYXRobmFtZSBpZiBpdCBpcyBub3QgYSBVUkwgZW5jb2RlZCBVbml4IHNvY2tldCBob3N0LlxuICAgIHJlc3VsdC5wYXRobmFtZSA9IGhvc3RuYW1lICsgcmVzdWx0LnBhdGhuYW1lXG4gIH1cbiAgaWYgKCFjb25maWcucG9ydCkge1xuICAgIC8vIE9ubHkgc2V0IHRoZSBwb3J0IGlmIHRoZXJlIGlzIG5vIGVxdWl2YWxlbnQgcXVlcnkgcGFyYW0uXG4gICAgY29uZmlnLnBvcnQgPSByZXN1bHQucG9ydFxuICB9XG5cbiAgY29uc3QgcGF0aG5hbWUgPSByZXN1bHQucGF0aG5hbWUuc2xpY2UoMSkgfHwgbnVsbFxuICBjb25maWcuZGF0YWJhc2UgPSBwYXRobmFtZSA/IGRlY29kZVVSSShwYXRobmFtZSkgOiBudWxsXG5cbiAgaWYgKGNvbmZpZy5zc2wgPT09ICd0cnVlJyB8fCBjb25maWcuc3NsID09PSAnMScpIHtcbiAgICBjb25maWcuc3NsID0gdHJ1ZVxuICB9XG5cbiAgaWYgKGNvbmZpZy5zc2wgPT09ICcwJykge1xuICAgIGNvbmZpZy5zc2wgPSBmYWxzZVxuICB9XG5cbiAgaWYgKGNvbmZpZy5zc2xjZXJ0IHx8IGNvbmZpZy5zc2xrZXkgfHwgY29uZmlnLnNzbHJvb3RjZXJ0IHx8IGNvbmZpZy5zc2xtb2RlKSB7XG4gICAgY29uZmlnLnNzbCA9IHt9XG4gIH1cblxuICAvLyBPbmx5IHRyeSB0byBsb2FkIGZzIGlmIHdlIGV4cGVjdCB0byByZWFkIGZyb20gdGhlIGRpc2tcbiAgY29uc3QgZnMgPSBjb25maWcuc3NsY2VydCB8fCBjb25maWcuc3Nsa2V5IHx8IGNvbmZpZy5zc2xyb290Y2VydCA/IHJlcXVpcmUoJ2ZzJykgOiBudWxsXG5cbiAgaWYgKGNvbmZpZy5zc2xjZXJ0KSB7XG4gICAgY29uZmlnLnNzbC5jZXJ0ID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZy5zc2xjZXJ0KS50b1N0cmluZygpXG4gIH1cblxuICBpZiAoY29uZmlnLnNzbGtleSkge1xuICAgIGNvbmZpZy5zc2wua2V5ID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZy5zc2xrZXkpLnRvU3RyaW5nKClcbiAgfVxuXG4gIGlmIChjb25maWcuc3Nscm9vdGNlcnQpIHtcbiAgICBjb25maWcuc3NsLmNhID0gZnMucmVhZEZpbGVTeW5jKGNvbmZpZy5zc2xyb290Y2VydCkudG9TdHJpbmcoKVxuICB9XG5cbiAgc3dpdGNoIChjb25maWcuc3NsbW9kZSkge1xuICAgIGNhc2UgJ2Rpc2FibGUnOiB7XG4gICAgICBjb25maWcuc3NsID0gZmFsc2VcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGNhc2UgJ3ByZWZlcic6XG4gICAgY2FzZSAncmVxdWlyZSc6XG4gICAgY2FzZSAndmVyaWZ5LWNhJzpcbiAgICBjYXNlICd2ZXJpZnktZnVsbCc6IHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGNhc2UgJ25vLXZlcmlmeSc6IHtcbiAgICAgIGNvbmZpZy5zc2wucmVqZWN0VW5hdXRob3JpemVkID0gZmFsc2VcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZ1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlXG5cbnBhcnNlLnBhcnNlID0gcGFyc2VcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/pg-connection-string/index.js\n");

/***/ })

};
;