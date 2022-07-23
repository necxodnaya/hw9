import "./ListTitle.css";

function ListTitle(props) {
  return (
    <div>
      {props.getItems.map((item) => {
        return (
          <div className="childItems">
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}
export default ListTitle;
