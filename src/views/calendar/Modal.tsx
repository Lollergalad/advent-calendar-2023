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
        quote = (
          <>
            <div>Édes kis egyetlenem,</div>
            <div>te vagy a világ nekem,</div>
            <div>egyetlen kis szerelmem!</div>
          </>
        );
        break;
      case 9:
        quote = (
          <>
            <div>Kicsi szívem, kicsi szám,</div>
            <div>Édesed puszikát, csókot kíván!</div>
          </>
        );
        break;
      case 10:
        quote = (
          <>
            <div>Mosolyod ha látom, azt hiszem csak egy álom,</div>
            <div>szemed ha látom olyan mint egy vágy, várom.</div>
          </>
        );
        break;
      case 11:
        quote = (
          <>
            <div>Ha te vagy a kenyér,</div>
            <div>én leszek melléd a bor,</div>
            <div>majd rajtad az ízem</div>
            <div>oly könnyedén áthatol.</div>
          </>
        );
        break;
      case 12:
        quote = (
          <>
            <div>Az élet szép, és oly csodás,</div>
            <div>megtalálni, kire vársz.</div>
            <div>Erdőben sétálva, hegyre mászva,</div>
            <div>virágos réten, kicsit elmélázva!</div>
          </>
        );
        break;
      case 13:
        quote = (
          <>
            <div>Akármerre járjak, keljek,</div>
            <div>mégis hozzád térek vissza.</div>
            <div>A te édes, hű szerelmed,</div>
            <div>az én igaz pihenőm.</div>
          </>
        );
        break;
      case 14:
        quote = (
          <>
            <div>Amíg nem porlad szét a szirt,</div>
            <div>s zúgnak a tengerek: </div>
            <div>szeretlek én,</div>
            <div>míg életem homokja elpereg.</div>
          </>
        );
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
