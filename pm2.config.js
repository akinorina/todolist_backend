module.exports = {
  apps: [
    {
      name: 'todolist_backend',
      script: './dist/main.js',
      cwd: '.',
      max_memory_restart: '512M',
      exec_mode: 'cluster',
      instances: 'max',
      instance_var: 'TODOLIST_ID',
      watch: ['./dist/*.js'],
      ignore_watch: ['node_modules'],
      env_production: {
        NODE_ENV: 'production',
      },
      env_development: {
        NODE_ENV: 'development',
      },
    },
  ],
};
