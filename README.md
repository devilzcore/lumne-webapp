## Configuration of environment.ts
You need to change the localhost URL for your custom domain

```
export const environment = {
  production: false,
  apiUrl: 'https://localhost:7262/api/',
  uploadUrl: 'https://localhost:5130/api/images/',
  localStorage: '~/webapp/images/',
}
```
**production:** set true or false if in development environment
<br>
**apiUrl:** this url is responsible for supporting the api address
<br>
**uploadUrl:** this url is responsible for supporting the file upload address
<br>
**localStorage:** this is path where the local storage images will be stored
