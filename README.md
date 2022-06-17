# throughput-test

This repo contains some stuff for demonstrating the performance characteristics (i.e throughput) of two different concurrency models applied to web servers:
- Concurrency via a thread-per-request with expanding threadpool (ruby).
- Concurrency via a single-thread with event loop (node)

Try:
- Run the ruby server: `rackup`
- Run the node server: `node app.js`
- Observe the throughput with a medium number of concurrent requests: `siege --time=10S --concurrent=100 $RUBY_SERVER_URL/$NODE_SERVER_URL`
- Observe the throughput with a high number of concurrent requests: `siege --time=10S --concurrent=200 $RUBY_SERVER_URL/$NODE_SERVER_URL`
- It's also worth seeing the thread count of each process.

# observations
- It's interesting to see that a supposedly non-production ruby server like webrick can scale perfectly fine to a high number of concurrent requests. It's only beyond ~120 concurrent requests that it starts to fall behind node in terms of throughput.
