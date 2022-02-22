// @ts-check

// Assigning value to the ambient variable defined in the ambient.d.ts file
isDevelopment = true;

const printEnvironment = (/** @type {boolean} */ isDev) => {
  if(isDev) {
    console.log('Running in development environment');
  } else {
    console.log('Running in the production environment')
  }
}

// call the function

printEnvironment(isDevelopment);