// Initialize Motor
MotorDriver.MotorInit()

//Control motor A forward and set speed
MotorDriver.MotorRun(Motor.A, Dir.forward, 10)

//Stop motor
MotorDriver.MotorStop(Motor.A)

//Control motor B backward and set speed
MotorDriver.MotorRun(Motor.B, Dir.backward, 5)

//Stop motor
MotorDriver.MotorStop(Motor.B)
