import Prismic from '@prismicio/client';
const apiEndpoint = 'https://seldo-svelte-kit-app.cdn.prismic.io/api/v2';
const Client = Prismic.client(apiEndpoint);

export default Client;
