const handleClick = (props) => {
    alert(props.label)
  };

const ButtonShowLabel = (props) => {
    return (
      <button onClick={() => handleClick(props)}>{props.label}</button>
    );
  };


  ButtonShowLabel.defaultProps = {
    label: 'Eis a label'
  }

  export default ButtonShowLabel;