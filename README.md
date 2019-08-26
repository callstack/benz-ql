# benz-ql

An Apollo GraphQL server for the [Mercedes-Benz REST APIs](https://developer.mercedes-benz.com/). Allows to query them via a single endpoint, using GraphQL.

```graphql
query {
  getVehicle(id: "1234567890ABCD1234") {
    licenseplate
    stateofcharge {
      value
    }
    location {
      longitude {
        value
        unit
      }
    }
  }
}
```

## Try it now

You can explore the query response by playing around with the [online playground](https://benz-ql.herokuapp.com/)

## Getting started

To get started, install the package from the registry:

```bash
$ yarn add benz-ql
```

## Configuraton

### Setting up the server

This package can be used with different server frameworks supported by Apollo. In this example, we will be using Express.

```js
import express from "express";
import { ApolloServer } from "apollo-server-express";
import benzQL, { scopes } from "benz-ql";

const app = express();
const PORT = 3000;
const server = new ApolloServer(benzQL(scopes.SANDBOX)); // chose your environment - SANDBOX or PROD

server.applyMiddleware({ app, path: "/benz-ql" });

app.listen(PORT, () => {
  console.log(`App listen on ${PORT}`);
  console.log(`Benz-ql avaliable on ${server.graphqlPath}`);
});
```

### Connecting from the client

Once you set up a development server and start it successfuly, you can connect with it by using GraphQL client of your choice. In this section, we are using a `apollo-boost` package in context of a React Native application.

> Note: You will need a token for accessing Mercedes APIs. Please consult [official documentation](https://developer.mercedes-benz.com/apis) for steps to do so.

Below example demonstrates accessing battery level from the API, including potential error handling.

```js
import React from "react";
import { View, Text } from "react-native";
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:3000/benz-ql",
  headers: {
    authorization: "a1b2c3d4-a1b2-a1b2-a1b2-a1b2c3d4e5f6"
  }
});

class Home extends React.Component {
  state = { batteryStatus: "unknown" };

  async componentDidMount() {
    const { data, error } = await client.query({
      query: gql`
        query {
          getVehicle(id: "1234567890ABCD1234") {
            stateofcharge {
              value
            }
          }
        }
      `
    });

    if (!error) {
      this.setState({
        batteryStatus: data.getVehicle.stateofcharge.value
      });
    }
  }

  render() {
    const { batteryStatus } = this.state;
    return (
      <View>
        <Text>Battery Status: {batteryStatus}</Text>
      </View>
    );
  }
}
```

## Contributing

### Run example server

This project comes with a development server that is useful for debugging and developing the library. In order to get started, follow the steps below:

1. Clone this repo
2. `yarn install`
3. `cd example`
4. `node index.js`
5. Open [http://localhost:3000](http://localhost:3000)

> Note: Example server uses sandbox environment

## Coverage table

Here is the list of supported APIs. Contributions are welcome to support the remaining list.

<table>
  <tr>
    <th>API Name</th>
    <th>API Resource</th>
    <th>Status</th>
  </tr>
  <tr>
    <td rowspan="7">Connected Vehicle (experimental)</td>
    <td>Vehicles</td>
    <td>implemented</td>
  </tr>
  <tr>
    <td>Tires</td>
    <td>implemented</td>
  </tr>
  <tr>
    <td>Doors</td>
    <td>implemented</td>
  </tr>
  <tr>
    <td>Location</td>
    <td>implemented</td>
  </tr>
  <tr>
    <td>Odometer</td>
    <td>implemented</td>
  </tr>
  <tr>
    <td>Fuel</td>
    <td>implemented</td>
  </tr>
  <tr>
    <td>State of Charge</td>
    <td>implemented</td>
  </tr>
  <tr>
    <td rowspan="4">Car Configurator</td>
    <td>References</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Configurations</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Images</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Saved configurations</td>
    <td>pending</td>
  </tr>
  <tr>
    <td rowspan="2">Dealer</td>
    <td>Dealer search</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>References</td>
    <td>pending</td>
  </tr>
  <tr>
    <td rowspan="4">Electric Vehicle Status</td>
    <td>Container Electric Vehicle Status</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Resources</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>State of charge resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Range electric resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td rowspan="4">Fuel Status</td>
    <td>Container Fuel Status</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Resources</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Tank level resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Range liquid resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td rowspan="3">Pay As You Drive Insurance</td>
    <td>Container Pay As You Drive Insurance</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Resources</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Odometer resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td rowspan="4">Remote Diagnostic Support</td>
    <td>Resources</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Electronical Control Units (ECU's)</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Diagnostic Trouble Codes (DTC's)</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Diagnostic Trouble Code (DTC) Snapshots</td>
    <td>pending</td>
  </tr>
  <tr>
    <td rowspan="2">Vehicle Images</td>
    <td>Vehicle Images Basic</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Vehicle Images 360</td>
    <td>pending</td>
  </tr>
  <tr>
    <td rowspan="5">Vehicle Lock Status</td>
    <td>Resources</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Door Lock Status Resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Door Lock Deck Lid Status Resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Door Lock Gas Status Resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Position Heading Resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td rowspan="18">Vehicle Status</td>
    <td>Container Vehicle Status</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Resources</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Decklid resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Front left door resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Front right door resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Rear left door resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Rear right door resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Interior front light resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Interior rear light resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Light switch position resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Front left reading lamp resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Front right reading lamp resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Convertible (roof top) resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Sunroof resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Front left windows resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Front right windows resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Rear left windows resource</td>
    <td>pending</td>
  </tr>
  <tr>
    <td>Rear right windows resource</td>
    <td>pending</td>
  </tr>
</table>

## Made with ❤️ at Callstack

This is an open source project and will always remain free to use. If you think it's cool, please star it 🌟. [Callstack](https://callstack.com) is a group of React and React Native geeks, contact us at [hello@callstack.com](mailto:hello@callstack.com) if you need any help with these or just want to say hi!
