import React, { useEffect, useState } from 'react';
import { Button, Modal, Switch, Text } from '@nextui-org/react';
import Display from './Display';

function ModalApp({ visible, setVisible, bindings }: any) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    setNumero(num1 + num2 + num3 + num4);
  }, [num1, num2, num3, num4]);

  useEffect(() => {
    setNumero(0);
    setNum1(0);
    setNum2(0);
    setNum3(0);
    setNum4(0);
  }, [visible]);

  return (
    <Modal
      scroll
      fullScreen
      closeButton
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      style={{backgroundImage: 'linear-gradient(to bottom right, #a19977, #8f141b)'}}
      {...bindings}
    >
      <Modal.Header>
        <Text
          h1
          size={40}
          css={{
            textGradient: '45deg, #8f141b 100%, #dfd4a6 100%',
          }}
          weight="bold"
        >
          Circuito de conversion de sistema binario a hexadecimal
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text h4 color='white' id="modal-description">
          Un circuito conversor de binario a hexadecimal es un circuito
          electrónico que convierte un número binario de cuatro bits en un
          número hexadecimal de un dígito. El circuito utiliza lógica
          combinacional para analizar los cuatro bits de entrada y producir un
          número hexadecimal correspondiente en la salida. En un sistema
          binario, cada dígito tiene dos posibles valores (0 o 1), mientras que
          en un sistema hexadecimal, cada dígito tiene 16 posibles valores (0-9
          y A-F). Por lo tanto, un número binario de cuatro bits puede ser
          representado por un número hexadecimal de un dígito. El circuito
          conversor de binario a hexadecimal típicamente utiliza un mapa de
          codificación para determinar la salida correspondiente en hexadecimal
          para cada posible combinación de cuatro bits de entrada. El mapa de
          codificación se construye mediante la asignación de valores
          hexadecimales a cada posible combinación de cuatro bits. Por ejemplo,
          el valor binario "0000" se asigna al valor hexadecimal "0", mientras
          que el valor binario "1111" se asigna al valor hexadecimal "F". Una
          vez que se ha construido el mapa de codificación, el circuito
          conversor de binario a hexadecimal utiliza lógica combinacional para
          identificar la combinación de entrada actual y producir la salida
          correspondiente en hexadecimal.
        </Text>
        <div className="Circuito" style={{overflow: "scroll", backgroundRepeat: "no-repeat"}}>
          <div className="switch">
            <div className="switch-item">
              <Text
                h1
                size={30}
                css={{
                  textGradient: '45deg, #dfd4a6 -20%, #8f141b 100%',
                }}
                weight="bold"
              >
                In A0
              </Text>
              <Switch
                bordered
                shadow
                color="error"
                size="xl"
                iconOn={'1'}
                iconOff={'0'}
                onChange={() => (num1 === 0 ? setNum1(1) : setNum1(0))}
              />
            </div>
            <div className="switch-item">
              <Text
                h1
                size={30}
                css={{
                  textGradient: '45deg, #dfd4a6 -20%, #8f141b 100%',
                }}
                weight="bold"
              >
                In A1
              </Text>
              <Switch
                bordered
                shadow
                color="error"
                size="xl"
                iconOn={'1'}
                iconOff={'0'}
                onChange={() => (num2 === 0 ? setNum2(2) : setNum2(0))}
              />
            </div>
            <div className="switch-item">
              <Text
                h1
                size={30}
                css={{
                  textGradient: '45deg, #dfd4a6 -20%, #8f141b 100%',
                }}
                weight="bold"
              >
                In A2
              </Text>
              <Switch
                bordered
                shadow
                color="error"
                size="xl"
                iconOn={'1'}
                iconOff={'0'}
                onChange={() => (num3 === 0 ? setNum3(4) : setNum3(0))}
              />
            </div>
            <div className="switch-item">
              <Text
                h1
                size={30}
                css={{
                  textGradient: '45deg, #dfd4a6 -20%, #8f141b 100%',
                }}
                weight="bold"
              >
                In A3
              </Text>
              <Switch
                bordered
                shadow
                color="error"
                size="xl"
                iconOn={'1'}
                iconOff={'0'}
                onChange={() => (num4 === 0 ? setNum4(8) : setNum4(0))}
              />
            </div>
          </div>
          <Display numero={numero} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          shadow
          color="error"
          auto
          onPress={() => {
            setVisible(false);
          }}
        >
          SALIR
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalApp;
