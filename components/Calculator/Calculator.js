"use client";
import css from "./Calculator.module.css";
import { useState } from "react";
import ModalBlock from "../Widgets/ModalBlock/ModalBlock";
import ChechBox from "../Widgets/ChechBox/ChechBox";
import RangeRow from "../Widgets/RangeRow/RangeRow";
import ColorButton from "../Widgets/ColorButton/ColorButton";

const Calculator = ({ setModal }) => {
  const [currentType1, setCurrentType1] = useState("Вся квартира");
  const lst1 = ["Вся квартира", "Кухня", "Ванная", "Дом", "Офис"];
  const lst2 = ["Вся квартира", "Кухня", "Ванная", "Дом", "Офис"];
  const [currentType2, setCurrentType2] = useState("Вся квартира");
  const [checkNewOld, setCHeckNewOld] = useState(false);
  const [square, setSquare] = useState(10);
  const [policy, setPolicy] = useState(true);

  return (
    <div className={css.container}>
      <div className={css.inputContainer}>
        <div className={css.block}>
          <span className={css.label}>Что нужно отремонтировать:</span>
          <div className={css.trigger}>
            <ModalBlock
              lst={lst1}
              type={currentType1}
              setType={setCurrentType1}
            />
          </div>

          <span className={css.label}>Вид ремонта:</span>
          <div className={css.trigger}>
            <ModalBlock
              lst={lst2}
              type={currentType2}
              setType={setCurrentType2}
            />
          </div>

          <span className={css.label}>Тип недвижимости</span>
          <div className={css.checkContainer}>
            <ChechBox
              check={checkNewOld}
              setCheck={() => setCHeckNewOld(!checkNewOld)}
              text={"Новостройка"}
            />
            <ChechBox
              check={!checkNewOld}
              setCheck={() => setCHeckNewOld(!checkNewOld)}
              text={"Вторичка"}
            />
          </div>
          <span className={css.label}>Укажите площадь квартиры:</span>
          <span className={css.square}>{square} м2</span>
          <input
            type="range"
            value={square}
            onChange={(e) => setSquare(e.target.value)}
            min={0}
            max={150}
            className={css.squareInput}
          />
        </div>

        <div className={css.block}>
          <span className={css.label}>Дополнительно:</span>
          <div className={css.check2Container}>
            <ChechBox
              check={!checkNewOld}
              setCheck={() => setCHeckNewOld(!checkNewOld)}
              text={"Дополнительная скидка 10%"}
            />
            <ChechBox
              check={!checkNewOld}
              setCheck={() => setCHeckNewOld(!checkNewOld)}
              text={"Дизайн-проект"}
            />
            <ChechBox
              check={!checkNewOld}
              setCheck={() => setCHeckNewOld(!checkNewOld)}
              text={"Подбор чистовых материалов (бесплатно)"}
            />
            <ChechBox
              check={!checkNewOld}
              setCheck={() => setCHeckNewOld(!checkNewOld)}
              text={"Спецификация на черновой материал (бесплатно)"}
            />
          </div>
          <span className={css.label}>
            Срок работ: от {parseInt(parseInt(square) + 20)} до{" "}
            {parseInt(parseInt(square) + 30)} дней
          </span>
          <div className={css.squareBox}>
            <RangeRow percent={square / 2} />
          </div>

          <span className={css.label}>
            Скидка составит: {parseInt(parseInt(square) * 152)} руб.
          </span>
          <div className={css.squareBox}>
            <RangeRow percent={square / 3} />
          </div>
        </div>
      </div>
      <ChechBox
        check={policy}
        setCheck={() => setPolicy(!policy)}
        text={"Я даю свое согласие на обработку персональных данных."}
      />
      <div className={css.buttonContainer} onClick={() => setModal(true)}>
        <ColorButton text={"Рассчитать стоимость"} onPress={() => {}} />
      </div>
    </div>
  );
};

export default Calculator;
