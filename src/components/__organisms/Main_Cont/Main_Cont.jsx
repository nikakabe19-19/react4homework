import Box from "../../../components/__moleculs/Box/Box";
import pizza from "../../../assets/Pizza .png";
import tortelini from "../../../assets/Tortellini .jpg";
import cake from "../../../assets/Strawberry cake .png";
import fire from "../../../assets/Fire.png";
import wheat from "../../../assets/wheat.png";

function Main_Cont() {
  return (
    <div className="main_cont">
      <Box
        color="white"
        test="Pepperoni Pizza"
        img={pizza}
        image={fire}
        foto={wheat}
        text="Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust."
        div="265 Cal"
        div1="P/F/C: 12/10/31"
        div2="53.8 °C"
        number="$23.90"
        num="$29.90"
        button="ORDER"
      />
      <Box
        color="white"
        test="Tortellini"
        img={tortelini}
        image={fire}
        foto={wheat}
        text="Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."
        div="270 Cal"
        div1="P/F/C: 18/4/41"
        div2="42.4 °C"
        number="$17.90"
        num="$29.90"
        button="ORDER"
      />
      <Box
        color="white"
        test="Strawberry Cake"
        img={cake}
        image={fire}
        foto={wheat}
        text="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
        div=" 346 Cal"
        div1="P/F/C: 6/14/49"
        div2="13.9 °C"
        number="$13.90"
        num="$29.90"
        button="ORDER"
      />
    </div>
  );
}

export default Main_Cont;
