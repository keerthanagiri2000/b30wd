import "./App.css";
export default function App() {
  // const names = ["one", "two", "three", "four", "five"];
  const names = [
    {
      name: "keerthana",
      src:
        "https://i.pinimg.com/564x/27/66/d1/2766d1ce71b173d6949775804a38563f.jpg"
    },
    {
      name: "keerthu",
      src:
        "https://i.pinimg.com/originals/89/54/13/895413bcffa166f4a192fd2773be211e.jpg"
    },
    {
      name: "keerthi",
      src:
        "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/Cute-Cartoon-Whatsapp-DP-Wallpaper-Pics-Download.png"
    }
  ];
  return (
    <div className="App">
      {/*<Welcome
        name="keerthana"
        src="https://i.pinimg.com/564x/27/66/d1/2766d1ce71b173d6949775804a38563f.jpg"
      />
      <Welcome
        name="keerthu"
        src="https://i.pinimg.com/originals/89/54/13/895413bcffa166f4a192fd2773be211e.jpg"
      />
      <Welcome
        name="keerthi"
        src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/Cute-Cartoon-Whatsapp-DP-Wallpaper-Pics-Download.png"
      /> */}
      {names.map((nm) => (
        <Welcome name={nm.name} src={nm.src} />
      ))}
    </div>
  );
}
//const name = "keerthana";

//return (
// <div>
// <h1>Hello, {props.name}😊😊</h1>

// </div>
//);
//}
function Msg({ name }) {
  return (
    <div>
      <h1>Hello, {name}😉😉🎶</h1>
    </div>
  );
}
function Welcome({ name, src }) {
  return (
    <div className="welcome">
      <img src={src} alt="image" />
      <h1>Hello,{name}😊😊</h1>
    </div>
  );
}
