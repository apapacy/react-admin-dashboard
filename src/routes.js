import UniversalRouter from 'universal-router';


export default new UniversalRouter([
  { path: '/form', action: form },
  { path: '(.*)', action: form },
])

async function form(req) {
  console.log(arguments);
  const Form = await import('./scenes/form');
  return {
    page: <Form.default />,
  }
}