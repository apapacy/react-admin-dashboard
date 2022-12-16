import { useState, Component } from 'react';
import history from '../history';
import routes from '../routes';


export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Component: null,
    }
    const handle = async ({ location }) => {
      console.log('locations is', location);
      const route = await routes.resolve(location.pathname)
      //const component = await import(`./riot/pages/${route.page}.riot`)
      //setComponent(route.page);
      console.log('component is', route.page)
      this.setState({ Component: route.page });
    }
    history.listen(handle)
    alert('constructor')
  };
  render() {
    return this.state.Component ? this.state.Component : <div>Not component is set</div>;
  }
}
/*
export default function({ href }) {
  const [Component, setComponent] = useState(null)
  const handle = async ({location}) => {
    console.log('locations is', location);
    const route = await routes.resolve(location)
    //const component = await import(`./riot/pages/${route.page}.riot`)
    //setComponent(route.page);
    console.log('component is', Component)
  }
  history.listen(handle)
  */