class AuthError extends Error {
  constructor(message, type = 'unknown', code = 500) {
    super(message);
    this.name = 'AuthError';
    this.type = type;
    this.code = code;
  }

  static fromAppwriteError(error) {
    return new AuthError(
      error.message || 'Authentication failed',
      error.type || 'unknown',
      error.code || 500
    );
  }

  log() {
    console.error(`[${this.name}] ${this.type}: ${this.message}`);
  }
}

export default AuthError;
