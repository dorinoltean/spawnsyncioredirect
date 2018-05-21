# Spwan a process  using child_process and redirect io of child to parent
I am writing a small automation script where I want to split my steps into modules. Some steps require running a cmd or powershell script where user needs to handle some level of interactions. For example i call chocolatey install and i want the user to accept the license. To do this i redirect stdio streams of the child process (chocolatey script) to the parent process that runs  the script so user can interact with it.


## interactive.js
A small script that requires user interaction.
Run it using `node interactive.js`

## index.js 
Run it using `node index.js`.
Calls `node interactive.js` to simulate an external process with user interaction. This spawns a new process that has its stdio redirected to the parent process.