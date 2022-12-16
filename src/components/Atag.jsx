import history from '../history';

export default function({ href }) {
  function  handleClick(e) {
    e.preventDefault();
    history.navigate(href);
  }
  return <a onClick={handleClick} href={href}>*Link*</a>
}
