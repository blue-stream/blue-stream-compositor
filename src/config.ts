export const config = {
    endpoints: {
        users: {
            rpc: {
                port: +(process.env.USERS_RPC_PORT || 6007),
                methods: {
                    GET_USERS_BY_IDS: 'getUsersByIds',
                },
            },
            port: +(process.env.USERS_PORT || 5007),
            hostname: process.env.USERS_HOST || 'http://localhost',
            api: process.env.USERS_API || '/api/user',
        },
        comments: {
            port: +(process.env.COMMENTS_PORT || 5003),
            hostname: process.env.COMMENTS_HOST || 'http://localhost',
            api: process.env.USERS_API || '/api/comment',
        },
        reactions: {
            rpc: {
                port: +(process.env.REACTIONS_RPC_PORT || 6004),
                methods: {
                    GET_REACTIONS_BY_RESOURCES: 'getReactionsByResources',
                },
            },
            port: +(process.env.REACTIONS_PORT || 5004),
            hostname: process.env.REACTIONS_HOST || 'http://localhost',
            api: process.env.USERS_API || '/api/reaction',
        },
        videos: {
            rpc: {
                port: +(process.env.VIDEOS_RPC_PORT || 6001),
                methods: {
                    GET_CHANNELS_VIEWS: 'getChannelsViews',
                },
            },
            port: +(process.env.VIDEOS_PORT || 5001),
            hostname: process.env.VIDEOS_HOST || 'http://localhost',
            api: process.env.USERS_API || '/api/video',
        },
        channels: {
            rpc: {
                port: +(process.env.CHANNELS_RPC_PORT || 6006),
                methods: {
                    GET_CHANNELS_BY_IDS: 'getChannelsByIds',
                },
            },
            port: +(process.env.CHANNELS_PORT || 5006),
            hostname: process.env.CHANNELS_HOST || 'http://localhost',
            api: process.env.USERS_API || '/api/channel',
        },
    },
    server: {
        port: +(process.env.SERVER_PORT || 3000),
        hostname: process.env.SERVER_HOST || 'http://localhost',
        name: process.env.SERVER_NAME || 'Compositor',
    },
    logger: {
        durable: false,
        exchangeType: process.env.RMQ_LOGGER_TYPE || 'topic',
        exchange: process.env.RMQ_LOGGER_EXCHANGE || 'blue_stream_logs',
        host: process.env.RMQ_LOGGER_HOST || 'localhost',
        port: +(process.env.RMQ_LOGGER_PORT || 15672),
        password: process.env.RMQ_LOGGER_PASS || 'guest',
        username: process.env.RMQ_LOGGER_USER || 'guest',
        persistent: false,
    },
    authentication: {
        required: process.env.AUTHENTICATION_REQUIRED || true,
        secret: process.env.SECRET_KEY || 'bLue5tream@2018',
    },
};
