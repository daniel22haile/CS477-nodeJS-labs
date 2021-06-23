# Exercise 2
1. Explain why do we want sometimes to use setImmediate instead of using setTimeout?
   - we use setImmediate over setTimeout when our event loop is on the check queue or phase.
2. Explain the difference between process.nextTick and setImmediate?
   - process.nextTick(callback) is a method which adds the callback function to the start of the next event queue.
     It's also called before the event loop is processed.
   - setImmediate(callback) is when ever we call it, it's call back function is placed in the **check phase** of the next queue.
3. Name 10 global modules/methods available in Node environment.s
   - Node.js with global objects
      - process
      - require
      - buffer
      - module
      - setTimeout(callback, delay) and clearTimeout()
      - setInterval(callback, delay) and clearInterval()
      - console
      - path module - provides utilities for handling and transforming file paths
   - Node.js objects with module scope
      - exports
      - __dirname -
      - __filename -
