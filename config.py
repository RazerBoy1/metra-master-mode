class Config(object):
    DEBUG = False
    TESTING = False
    SECRET_KEY = "SECRETKEYHERE"
    UPLOADS = "path/to/uploads"
    SESSION_COOKIES = True


class ProductionConfig(Config):
    pass


class DevelopmentConfig(Config):
    DEBUG = True
    TESTING = False
    SECRET_KEY = "DEVELOPMENTKEY"
    UPLOADS = "path/to/dev/uploads"
    SESSION_COOKIES = False


class StagingConfig(Config):
    DEBUG = False
    SECRET_KEY = "STAGINGKEY"
    UPLOADS = "path/to/staging/uploads"
    SESSION_COOKIES = False