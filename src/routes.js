import UniversalRouter from 'universal-router';
import Form from "./scenes/form";

export default new UniversalRouter([
  { path: '/form', action: (req) => ({ page: <Form /> }) },
  { path: '(.*)', action: (req) => ({ page: <Form /> })},
])
