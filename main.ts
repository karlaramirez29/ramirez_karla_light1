while (true) {
    console.log("light_level:" + input.lightLevel())
    if (input.lightLevel() > 20) {
        light.setAll(light.rgb(0, 0, 0))
    } else if (input.lightLevel() >= 10) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.setAll(light.rgb(255, 144, 3))
    }
    
}
