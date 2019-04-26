# use-react-switch

> 

[![NPM](https://img.shields.io/npm/v/use-react-switch.svg)](https://www.npmjs.com/package/use-react-switch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-react-switch
```

## Usage

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

## License

MIT © [shahabvshahabi1996](https://github.com/shahabvshahabi1996)
