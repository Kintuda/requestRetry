### Description

This is a very basic implementation for retrying http request upon failure.

### Features

 - Usage of promises instead of callback.
 - Can recursive try to send request.
 - Can add timeout between requests.

### Installation

Installing the package is really easy, you only need to paste the command in your terminal, 
or just copy the code and use in your program, whatever is easier for you. 

Using npm
```
$ npm install --save retryrecursive
```
Using yarn
```
$ yarn add retryrecursive
```

### Example

Here's a example
```
const retry = require('retryrequest')

const main = async () => {
  try{
    const config = {
      data: { msg: 'Hello World' },
      url: 'http://example-url.com'
    }
    let response = await retry(3, 1000, config)
  }catch(error){
    console.log(`Error sending request, Error: ${error}`)
  }
}

main()

```


### Dependencies

This package only has one dependency, package axios.

### License

MIT