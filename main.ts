basic.forever(function () {
    if (reromicro.ReadUltrasonic() <= 20) {
        reromicro.Brake()
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Left) && (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
        reromicro.Brake()
    } else {
        reromicro.ReadLineSensors()
        if (reromicro.LineSensorDetectsLine(LineSensors.Left) && (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
            reromicro.Brake()
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
            reromicro.MoveForward(35)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
            reromicro.TurnLeft(35)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
            reromicro.TurnRight(35)
        } else {
            reromicro.Brake()
        }
    }
})
