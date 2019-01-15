export const config = {
    proxy: {
        port: +(process.env.PROXY_PORT || 6000),
    },
    server: {
        port: +(process.env.SERVER_PORT || 3000),
    },
};
