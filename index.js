var cp = require("child_process")

var spawn = cp.spawnSync('node', ['interactive.js'], 
{
    stdio:"inherit"
})
