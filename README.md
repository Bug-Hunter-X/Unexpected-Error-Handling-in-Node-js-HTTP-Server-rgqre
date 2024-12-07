# Unexpected Error Handling in Node.js HTTP Server

This repository demonstrates a common issue in Node.js HTTP servers: insufficient error handling. The provided code only handles the `EADDRINUSE` error (port already in use), leaving other potential errors unhandled.

## Problem

The initial `server.on('error', ...)` block only checks for `err.code === 'EADDRINUSE'`. Any other error will cause the server to crash without providing a helpful error message.

## Solution

The solution improves error handling by providing more informative error messages for various error scenarios and using a more robust method to handle the errors.