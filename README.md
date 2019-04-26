# 😻 use-react-switch

> 

[![NPM](https://img.shields.io/npm/v/use-react-switch.svg)](https://www.npmjs.com/package/use-react-switch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install 😎

```bash
npm install --save use-react-switch
```
## Usage 🤔

```jsx
import React, { Component } from 'react'

import Switch from 'use-react-switch'

class Example extends Component {
  
  constructor() {
    super();
    this.state = {
      isOpen : false
    }
  }

  render () {
    let {isOpen} = this.state;
    return (
      <Switch
        name="switch"
        onClick={() => this.setState({isOpen : !isOpen})}
        isOpen={isOpen}
      />
    )
  }
}
```

## Demo 😍 
This is how it looks but if you looking for something live click [here 👇](https://codesandbox.io/s/0yn4zyjoxv?fontsize=14)

![use-react-switch](https://user-images.githubusercontent.com/19559766/56836882-c8cbfd00-688d-11e9-9794-9dd040154326.png)


## License 📃

MIT © [shahabvshahabi1996](https://github.com/shahabvshahabi1996)
