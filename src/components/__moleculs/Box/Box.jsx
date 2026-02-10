function Box({
  test,
  white,
  img,
  image,
  foto,
  text,
  div,
  div1,
  div2,
  number,
  num,
  button,
}) {
  return (
    <>
      <div className="box_div">
        <img className="img_box" src={img} alt="" />
        <div className={white}></div>
        <div className="test_box">
          {test}
          <div className="image_box">
            <img src={image} alt="" />
            <img src={foto} alt="" />
          </div>
        </div>
        <div className="text_box">{text}</div>
        <div className="smoll_box">
          <div> {div}</div>
          <div> {div1}</div>
          <div> {div2}</div>
        </div>
        <div className="number_box">
          {number}
          <div className="num_box">{num}</div>
          <button className="btn_box">{button}</button>
        </div>
      </div>
    </>
  );
}

export default Box;
