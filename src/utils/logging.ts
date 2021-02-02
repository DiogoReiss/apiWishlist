const log = {
  info: (reference: string, message: string, color = true) =>
    color
      ? console.log(`\x1b[42m[INFO - ${reference} -> ${message}\x1b[0m`)
      : console.log(`INFO - ${reference} -> ${message}`),
  warning: (reference: string, message: string, color = true) =>
    color
      ? console.log(`\x1b[42m[WARNING - ${reference} -> ${message}\x1b[0m`)
      : console.log(`WARNING - ${reference} -> ${message}`),
  error: (reference: string, message: string, color = true) =>
    color
      ? console.log(`\x1b[42m[ERROR - ${reference} -> ${message}\x1b[0m`)
      : console.log(`ERROR - ${reference} -> ${message}`),
};

export default log;
