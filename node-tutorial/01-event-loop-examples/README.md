<u><b><h2> What is the Event Loop?</h2></b></u>
The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the <b>poll</b> queue to eventually be executed. 

<b><h3>Event Loop Explained</h3></b>
When Node.js starts, it initializes the event loop, processes the provided input script (or drops into the <code>REPL</code>, which is not covered in this document) which may make async API calls, schedule timers, or call <code>process.nextTick()</code>, then begins processing the event loop.

The following diagram shows a simplified overview of the event loop's order of operations.

![event loop's order of operations](../../resources/img/event_loop_flow.png?raw=true)

> Each box will be referred to as a "phase" of the event loop.

Each phase has a FIFO queue of callbacks to execute. While each phase is special in its own way, generally, when the event loop enters a given phase, it will perform any operations specific to that phase, then execute callbacks in that phase's queue until the queue has been exhausted or the maximum number of callbacks has executed. When the queue has been exhausted or the callback limit is reached, the event loop will move to the next phase, and so on.

Since any of these operations may schedule more operations and new events processed in the poll phase are queued by the kernel, poll events can be queued while polling events are being processed. As a result, long running callbacks can allow the poll phase to run much longer than a timer's threshold. See the <code>timers</code> and <code>poll</code> sections for more details.



### Further Reading
* [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
* [Understanding the Node.js Event Loop | medium - Tyler Hawkins](https://dev.to/thawkin3/understanding-the-node-js-event-loop-242d)
* [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
* [Asynchronous JavaScript & EVENT LOOP from scratch 🔥 | Namaste JavaScript | Akshay Saini](https://www.youtube.com/watch?v=8zKuNo4ay8E)
* [Asynchronous flow control](https://nodejs.dev/en/learn/asynchronous-flow-control/)
* [A Deep Dive Into the Node js Event Loop - Tyler Hawkins | 
UtahJS
](https://www.youtube.com/watch?v=KKM_4-uQpow&list=PLuVqdWOQ-PNkUIsH2hz45VUmnDoUUzGI5&index=12)




