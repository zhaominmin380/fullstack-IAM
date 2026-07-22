/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'https://fullstack-iam.onrender.com', // the running FLASK api server url
  auth0: {
    url: 'dev-wcqvzlc8letz1j52.us', // the auth0 domain prefix
    audience: 'Image', // the audience set for the auth0 app
    clientId: 'XkZo2R11uPQweRe9dCruFygYLwu09yjA', // the client id generated for the auth0 app
    callbackURL: 'https://fullstackiam.vercel.app', // the base url of the running ionic application. 
  }
};
