export const config = {
    endpoints: {
        users: {
            port: +(process.env.USERS_PORT || 5002),
            hostname: process.env.USERS_HOST || 'http://51.136.28.220',
            api: process.env.USERS_API || 'api/user',
        },
        comments: {
            port: +(process.env.COMMENTS_PORT || 5003),
            hostname: process.env.COMMENTS_HOST || 'http://51.136.28.220',
            api: process.env.USERS_API || 'api/comment',
        },
        reactions: {
            port: +(process.env.REACTIONS_PORT || 5004),
            hostname: process.env.REACTIONS_HOST || 'http://51.136.28.220',
            api: process.env.USERS_API || 'api/reaction',
        },
        videos: {
            port: +(process.env.VIDEOS_PORT || 5001),
            hostname: process.env.VIDEOS_HOST || 'http://51.136.28.220',
            api: process.env.USERS_API || 'api/video',
        },
        channels: {
            port: +(process.env.CHANNELS_PORT || 5006),
            hostname: process.env.CHANNELS_HOST || 'http://51.136.28.220',
            api: process.env.USERS_API || 'api/channel',
        },
    },
    server: {
        port: +(process.env.SERVER_PORT || 3000),
        hostname: process.env.SERVER_HOST || 'http://51.136.28.220',
        name: process.env.SERVER_NAME || 'Compositor',
    },
    authentication: {
        required: process.env.AUTHENTICATION_REQUIRED || true,
        secret: process.env.SECRET_KEY || 'bLue5tream@2018',
    },
};
