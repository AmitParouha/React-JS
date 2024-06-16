import "./CoreComponent.css";
 
export default function CoreComponent({ image, title, description, ...props }) {
  return (
    <div {...props}>
      {/*Here className is "card" and id is "forwarded-props" */}
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}