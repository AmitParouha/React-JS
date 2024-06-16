import "./TabButton.css";
 
export default function TabButton({ children, isSelected, ...props }) {
  return (
    <>
      <div className="buttonLi">
        <button
          className={isSelected ? "active" : undefined}
          {...props} // onClick={onSelect}
        >
          {children}
        </button>
      </div>
    </>
  );
}