setInterval(() => {
    console.log('hello world')
  }, 2000)
  console.log(`I will run first`)
  // process stays alive unless
  // Kill Process CONTROL + C
  // unexpected error

  /**
   * When we run the above code,
   * we get the O/P:
   *        I will run first
   *        hello world
   *        hello world
   *        hello world
   *        hello world
   *        hello world
   *        ....
   *        ....
   * 
   * and continues
   * 
   * The process stays alive unless
   * until there is unexpected error or 
   * We Kill Process CONTROL + C
   * 
   * This happens because the operating system process nevers exicts,
   * because it waits for the other offloaded operations to finish,
   * which is current screnario never finish
   * As the setInterval() is alive.
   * 
   * Thus once the current code stack finish,
   * it waits for operations from the offloaded queue.
   * And so our process never ends and keeps running.
   */