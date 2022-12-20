import UniversalRouter from 'universal-router';

export default new UniversalRouter([
  { path: '/', action: form('dashboard') },
  { path: '/team', action: form('team') },
  { path: '/contacts', action: form('contacts') },
  { path: '/invoices', action: form('invoices') },
  { path: '/form', action: form('form') },
  { path: '/bar', action: form('bar') },
  { path: '/pie', action: form('pie') },
  { path: '/line', action: form('line') },
  { path: '/faq', action: form('faq') },
  { path: '/calendar', action: form('calendar') },
  { path: '/geography', action: form('geography') },
  { path: '(.*)', action: form },
])

function form(path) {
  return async function form(req) {
    console.log(arguments);
    const Form = await import(`./scenes/${path}`);
    return {
      page: <Form.default />,
    }
  }
}
