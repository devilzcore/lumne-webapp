## Configuration of environment.ts
In **environment.ts**, the url must be changed according to your development environment, either on localhost or on a custom domain.

```
export const environment = {
  // set true or false if in development environment
  production: false,

  // this url is responsible for supporting the api address
  apiUrl: 'https://localhost:7262/api/',

  // this url is responsible for supporting the file upload address
  uploadUrl: 'https://localhost:5130/api/images/',

  // this is path where the local storage images will be stored
  localStorage: '~/webapp/images/',
}
```
