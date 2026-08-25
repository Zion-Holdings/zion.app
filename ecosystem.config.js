module.exports = {
  apps: [{
    name: "zion-dev-server",
    script: "node_modules/.bin/next",
    args: "dev -p 3000 -H 0.0.0.0",
    cwd: "/Users/klebergarciaalcatrao/zion-support.github.io",
    exec_mode: "fork",
    instances: 1,
    restartDelay: 3000,
    maxRestarts: 10,
    maxMemoryRestart: "1G",
    env: {
      NODE_ENV: "development",
      PORT: 3000
    },
    log_file: "/Users/klebergarciaalcatrao/zion-support.github.io/logs/dev-server-pm2.log",
    error_file: "/Users/klebergarciaalcatrao/zion-support.github.io/logs/dev-server-pm2-err.log",
    out_file: "/Users/klebergarciaalcatrao/zion-support.github.io/logs/dev-server-pm2-out.log",
    time: true
  }]
};
