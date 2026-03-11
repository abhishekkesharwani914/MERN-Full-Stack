function Header(props) {
  return (
    <header>
        {/* {console.log(props)} */}
      <h1>{props.name}</h1>
    </header>
  );
}

export default Header;