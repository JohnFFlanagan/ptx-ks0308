enum Motor {
    //% block="A"
    A = 0x1,
    //% block="B"
    B = 0x2,
}

enum Dir {
    //% block="Forward"
    forward = 0x1,
    //% block="Backward"
    backward = 0x2,
}

let BCTRL = DigitalPin.P14;
let PWMA = AnalogPin.P1;
let AIN1 = DigitalPin.P12;
let AIN2 = DigitalPin.P13;
let PWMB = AnalogPin.P2;
let BIN1 = DigitalPin.P15;
let BIN2 = DigitalPin.P16;

//% weight=20 color=#3333FF icon="\uf1b9"
namespace MotorDriver {
    /**
     * Initialize Motor
     */
    //% blockId=MotorDriver_MotorInit block="Motor Initialize"
    //% weight=100
    export function MotorInit() {
        pins.digitalWritePin(BCTRL, 1)
    }

    /**
     * Motor Run
     * @param speed [0-16] speed of Motor
    */
    //% blockId=MotorDriver_MotorRun block="Motor %m|direction %index|speed %speed"
    //% weight=90
    //% speed.min=-100 speed.max=100
    export function MotorRun(m: Motor, index: Dir, speed: number): void {
        speed = speed * 1023 / 100; // map 0 to 1023

        if (m == Motor.A) {
            pins.analogWritePin(PWMA, speed)
            if (index == Dir.forward) {
                pins.digitalWritePin(AIN1, 1)
                pins.digitalWritePin(AIN2, 0)
            } else {
                pins.digitalWritePin(AIN1, 0)
                pins.digitalWritePin(AIN2, 1)
            }
        } else {
            pins.analogWritePin(PWMB, speed)
            if (index == Dir.forward) {
                pins.digitalWritePin(BIN1, 1)
                pins.digitalWritePin(BIN2, 0)
            } else {
                pins.digitalWritePin(BIN1, 0)
                pins.digitalWritePin(BIN2, 1)
            }
        }
    }

    //% blockId=MotorStop
    //% block="Motor %Motor| Stop"
    //% weight=80
    export function MotorStop(m: Motor): void {
        if (m == Motor.A)
            pins.analogWritePin(PWMA, 0)
        else
            pins.analogWritePin(PWMB, 0)
    }
}
