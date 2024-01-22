module.exports = ({ env }) => ({
    proxy: true,
    url: env('APP_URL'), // 取代開發環境中的 `host` 和 `port` 屬性
    app: { 
      keys: env.array('APP_KEYS')
    },
  });
  