import { FC, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Tilt from "react-parallax-tilt";

import classes from "./Modal.module.scss";

interface ModalProps {
  day: number;
  setIsModalOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Modal: FC<ModalProps> = ({ day, setIsModalOpen }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return function cleanup() {
      document.body.style.overflow = "auto";
    };
  }, []);

  const getQuote = () => {
    let quote;
    switch (day) {
      case 1:
        quote = (
          <>
            <div>Amíg a szívem utolsót nem dobban,</div>
            <div>szeretni foglak az életemnél is jobban.</div>
          </>
        );
        break;

      case 2:
        quote = (
          <>
            <div>A szerelem mindent pótol,</div>
            <div>s a szerelmet nem pótolja semmi.</div>
          </>
        );
        break;
      case 3:
        quote = (
          <>
            <div>Amit szivedbe rejtesz,</div>
            <div>szemednek tárd ki azt;</div>
            <div>amit szemeddel sejtesz</div>
            <div>sziveddel várd ki azt.</div>
          </>
        );
        break;
      case 4:
        quote = (
          <>
            <div>Milyen sötét vón a világ, az élet,</div>
            <div>Ha nem szeretnél, fényes angyalom!</div>
          </>
        );
        break;
      case 5:
        quote = (
          <>
            <div>Az a szerelem amikor annyira szeretnek,</div>
            <div>hogy a lábujjaid is kivételesek lesznek.</div>
          </>
        );
        break;
      case 6:
        quote = (
          <>
            <div>Szerelem, ha egyik a másikat repülni hagyja,</div>
            <div>de ha zuhan fél szárnyát kölcsön adja.</div>
          </>
        );
        break;

      case 7:
        quote = (
          <>
            <div>Az igaz szerelem azt jelenti,</div>
            <div>hogy a másik boldogsága fontosabb számunkra,</div>
            <div>mint a sajátunk.</div>
          </>
        );
        break;
      case 8:
        break;
      case 9:
        break;
      case 10:
        break;
      case 11:
        break;
      case 12:
        break;
      case 13:
        break;
      case 14:
        break;
      case 15:
        break;
      case 16:
        break;
      case 17:
        break;
      case 18:
        break;
      case 19:
        break;
      case 20:
        break;
      case 21:
        break;
      case 22:
        break;
      case 23:
        break;
      case 24:
        break;

      default:
        quote = "default";
        break;
    }

    return quote;
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <OutsideClickHandler
          onOutsideClick={() => {
            setIsModalOpen(false);
          }}>
          <Tilt
            className={classes.tilt}
            tiltEnable={false}
            //   glareEnable={true}
            //   glareMaxOpacity={0.8}
            //   glareColor="#ffffff"
            //   glarePosition="bottom"
            //   glareBorderRadius="20px"
          >
            <div>
              {getQuote()}
              {/* <h1>React Parallax Tilt 👀</h1> */}
            </div>
          </Tilt>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Modal;
