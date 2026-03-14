function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
//my button is a component


//Now that you’ve declared MyButton, you can nest it into another component:
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
