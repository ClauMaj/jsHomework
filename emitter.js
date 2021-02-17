/*
Create Emitter class
Create a class/function that returns an Emitter object.
This object allows us to subscribe to an event and execute a callback
whenever that event is triggered. 
The emit function will trigger all functions subscribed to an event and passes
all supplied arguments.

A callback can be removed from being subscribed to an event.

functions - subscribe(eventName, cb), emit(eventName, args)
subscribe - returns 'release functionality'
*/

function Emitter() {
  //key = event name
  //val = array of subscribers to that event
  const eventTracker = {};

  const subscribe = (name, cb) => {
    if (eventTracker[name]) {
      eventTracker[name].push(cb);
    } else {
      eventTracker[name] = [cb];
    }
    return {
      release: () => {
        let theCbs = eventTracker[name];
        let idx = theCbs.indexOf(cb);
        if (idx > -1) {
          theCbs.splice(idx, 1);
        }
      }
    };
  };

  const emit = (name, ...theArgs) => {
    let cbs = eventTracker[name];
    for (let i = 0; i < cbs.length; i++) {
      var cb = cbs[i];
      cb.apply(null, theArgs);
    }
  };

  return {
    subscribe,
    emit
  };
}
  
  let myEmit = new Emitter();
  
  function logArgs(...items) {
    console.log(items);
  }
  function sumAll(...nums) {
    let result = nums.reduce((acc, cur) => acc + cur, 0);
    console.log(result);
  }
  
  let sub1 = myEmit.subscribe("foo", logArgs); // should print [1,2]
  let sub2 = myEmit.subscribe("foo", sumAll); // should print 3
  
  let sub3 = myEmit.subscribe("bar", sumAll); // should print 11
  
  myEmit.emit("foo", 1, 2); // sub1 and sub2 triggered
  myEmit.emit("bar", 5, 6); // sub3 triggered
  sub1.release(); // remove sub1
  myEmit.emit("foo", 1, 2); // sub2 triggered
  
  export default Emitter;