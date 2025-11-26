import winston from 'winston'
import 'winston-daily-rotate-file'

// ✅ 2. Define file transports
const errorTransport = new winston.transports.DailyRotateFile({
  filename: './logs/error-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '5m',
  maxFiles: '14d',
  level: 'error',
  handleExceptions: true
})

const combinedTransport = new winston.transports.DailyRotateFile({
  filename: './logs/combined-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '10m',
  maxFiles: '14d',
  handleExceptions: true
})

// ✅ 3. Create logger instance
export const logger = winston.createLogger({
  level: 'silly', // logs everything from silly -> error
  format: winston.format.combine(
    winston.format.label({ label: '[APP LOGGER]' }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
    winston.format.errors({ stack: true })
  ),
  transports: [
    // Console transport
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.timestamp({ format: 'HH:mm:ss' })
      )
    }),

    // File transports
    errorTransport,
    combinedTransport
  ],
  exitOnError: false
})
