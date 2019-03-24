(function ($) {
    var Block = function (blockX, blockY, blockWidth, cvs) {
        this.blockX1 = blockX
        this.blockY1 = blockY
        this.blockWidth = blockWidth
        this.blockX2 = blockX
        this.blockY2 = blockY + blockWidth
        this.cvs = cvs
        this.rn = 0
        var r1 = 0
        var r2 = 0
        while (1) {
            r1 = Math.floor(Math.random() * 4)
            r2 = Math.floor(Math.random() * 4)
            if ((r1 == 3 && r2 == 0) || (r1 == 2 && r2 == 3)) {

            } else {
                // debugger
                break
            }
        }
        console.log("r1:" + r1)
        console.log("r2:" + r2)
        switch (r1) {
            case 0:
                this.blockX3 = blockX - blockWidth
                this.blockY3 = blockY
                break
            case 1:
                this.blockX3 = blockX
                this.blockY3 = blockY - blockWidth
                break
            case 2:
                this.blockX3 = blockX + blockWidth
                this.blockY3 = blockY
                break
            case 3:
                this.blockX3 = blockX - blockWidth
                this.blockY3 = blockY + blockWidth
                break
        }
        switch (r2) {
            case 0:
                this.blockX4 = this.blockX2 - blockWidth
                this.blockY4 = this.blockY2
                break
            case 1:
                this.blockX4 = this.blockX2
                this.blockY4 = this.blockY2 + blockWidth
                break
            case 2:
                this.blockX4 = this.blockX2 + blockWidth
                this.blockY4 = this.blockY2
                break
            case 3:
                this.blockX4 = this.blockX2 + blockWidth
                this.blockY4 = this.blockY2 - blockWidth
                break
        }
    }
    Block.prototype = {
        change: function () {

        },
        down: function () {
            // debugger
            this.clear()
            this.move(0)
            this.draw()
        },
        move: function (d) {
            var x1 = (this.blockX1 - 900) / this.blockWidth
            var x2 = (this.blockX2 - 900) / this.blockWidth
            var x3 = (this.blockX3 - 900) / this.blockWidth
            var x4 = (this.blockX4 - 900) / this.blockWidth

            var y1 = (heightArray[0][0] - this.blockY1) / this.blockWidth
            var y2 = (heightArray[0][0] - this.blockY2) / this.blockWidth
            var y3 = (heightArray[0][0] - this.blockY3) / this.blockWidth
            var y4 = (heightArray[0][0] - this.blockY4) / this.blockWidth

            if (d == 0) {
                this.blockY1 += 0.5;
                this.blockY2 += 0.5;
                this.blockY3 += 0.5;
                this.blockY4 += 0.5;
            } else if (d == -1) {
                // debugger
                if (this.blockX1 <= 900 || this.blockX2 <= 900 || this.blockX3 <= 900 || this.blockX4 <= 900) {
                    return
                }
                if (heightArray[Math.floor(y1)][x1 - 1] > 0 || heightArray[Math.floor(y2)][x2 - 1] > 0 || heightArray[Math.floor(y3)][x3 - 1] > 0 || heightArray[Math.floor(y4)][x4 - 1] > 0 || heightArray[Math.ceil(y1)][x1 - 1] > 0 || heightArray[Math.ceil(y2)][x2 - 1] > 0 || heightArray[Math.ceil(y3)][x3 - 1] > 0 || heightArray[Math.ceil(y4)][x4 - 1] > 0) {
                    return
                }
                this.blockX1 -= this.blockWidth;
                // this.blockY1 += 1;
                this.blockX2 -= this.blockWidth;
                // this.blockY2 += 1;
                this.blockX3 -= this.blockWidth;
                // this.blockY3 += 1;
                this.blockX4 -= this.blockWidth;
                // this.blockY4 += 1;
            } else if (d == 1) {
                if (this.blockX1 >= this.blockWidth * 14 + 900 || this.blockX2 >= this.blockWidth * 14 + 900 || this.blockX3 >= this.blockWidth * 14 + 900 || this.blockX4 >= this.blockWidth * 14 + 900) {
                    return
                }
                // try {
                if (heightArray[Math.floor(y1)][x1 + 1] > 0 || heightArray[Math.floor(y2)][x2 + 1] > 0 || heightArray[Math.floor(y3)][x3 + 1] > 0 || heightArray[Math.floor(y4)][x4 + 1] > 0 || heightArray[Math.ceil(y1)][x1 + 1] > 0 || heightArray[Math.ceil(y2)][x2 + 1] > 0 || heightArray[Math.ceil(y3)][x3 + 1] > 0 || heightArray[Math.ceil(y4)][x4 + 1] > 0) {
                    return
                }
                // }
                // catch (err) {
                //     console.log(err)
                //     debugger
                // }
                // console.table(heightArray)
                // debugger

                this.blockX1 += this.blockWidth;
                // this.blockY1 += 1;
                this.blockX2 += this.blockWidth;
                // this.blockY2 += 1;
                this.blockX3 += this.blockWidth;
                // this.blockY3 += 1;
                this.blockX4 += this.blockWidth;
                // this.blockY4 += 1;
            } else if (d == 2) {

                this.rn++
                var x = setArray([this.blockX1 - 900, this.blockX2 - 900, this.blockX3 - 900, this.blockX4 - 900]) + 900
                var y = setArray([this.blockY1 - 10, this.blockY2 - 10, this.blockY3 - 10, this.blockY4 - 10]) + 10
                // debugger
                var a = getNewLoc(this.blockX1, this.blockY1, x, y)
                var b = getNewLoc(this.blockX2, this.blockY2, x, y)
                var c = getNewLoc(this.blockX3, this.blockY3, x, y)
                var d = getNewLoc(this.blockX4, this.blockY4, x, y)
                if (a.x >= this.blockWidth * 14 + 900 || b.x >= this.blockWidth * 14 + 900 || c.x >= this.blockWidth * 14 + 900 || d.x >= this.blockWidth * 14 + 900 || a.x <= 900 || b.x <= 900 || c.x <= 900 || d.x <= 900) {
                    return
                }

                var x1 = 0
                var x2 = 0
                var x3 = 0
                var x4 = 0
                if (this.rn % 2 == 0) {
                    x1 = Math.floor((a.x - 900) / this.blockWidth)
                    x2 = Math.floor((b.x - 900) / this.blockWidth)
                    x3 = Math.floor((c.x - 900) / this.blockWidth)
                    x4 = Math.floor((d.x - 900) / this.blockWidth)
                } else {
                    x1 = Math.ceil((a.x - 900) / this.blockWidth)
                    x2 = Math.ceil((b.x - 900) / this.blockWidth)
                    x3 = Math.ceil((c.x - 900) / this.blockWidth)
                    x4 = Math.ceil((d.x - 900) / this.blockWidth)
                }
                var y1 = (heightArray[0][0] - a.y) / this.blockWidth
                var y2 = (heightArray[0][0] - b.y) / this.blockWidth
                var y3 = (heightArray[0][0] - c.y) / this.blockWidth
                var y4 = (heightArray[0][0] - d.y) / this.blockWidth
                // debugger
                if (heightArray[Math.floor(y1)][x1] > 0 || heightArray[Math.floor(y2)][x2] > 0 || heightArray[Math.floor(y3)][x3] > 0 || heightArray[Math.floor(y4)][x4] > 0 || heightArray[Math.ceil(y1)][x1] > 0 || heightArray[Math.ceil(y2)][x2] > 0 || heightArray[Math.ceil(y3)][x3] > 0 || heightArray[Math.ceil(y4)][x4] > 0) {
                    return
                }
                this.blockX1 = x1 * this.blockWidth + 900
                this.blockY1 = a.y - this.blockWidth

                this.blockX2 = x2 * this.blockWidth + 900
                this.blockY2 = b.y - this.blockWidth

                this.blockX3 = x3 * this.blockWidth + 900
                this.blockY3 = c.y - this.blockWidth

                this.blockX4 = x4 * this.blockWidth + 900
                this.blockY4 = d.y - this.blockWidth
            }

        },
        draw: function () {
            this.cvs.beginPath()
            this.cvs.fillStyle = '#ff8a80'
            this.cvs.lineWidth = 1
            this.cvs.rect(this.blockX1, this.blockY1, this.blockWidth, this.blockWidth)
            this.cvs.rect(this.blockX2, this.blockY2, this.blockWidth, this.blockWidth)
            this.cvs.rect(this.blockX3, this.blockY3, this.blockWidth, this.blockWidth)
            this.cvs.rect(this.blockX4, this.blockY4, this.blockWidth, this.blockWidth)
            this.cvs.fill()
            this.cvs.stroke()
        },
        clear: function () {
            this.cvs.beginPath()
            this.cvs.clearRect(this.blockX1 - 1, this.blockY1 - 1, this.blockWidth + 2, this.blockWidth + 2)
            this.cvs.clearRect(this.blockX2 - 1, this.blockY2 - 1, this.blockWidth + 2, this.blockWidth + 2)
            this.cvs.clearRect(this.blockX3 - 1, this.blockY3 - 1, this.blockWidth + 2, this.blockWidth + 2)
            this.cvs.clearRect(this.blockX4 - 1, this.blockY4 - 1, this.blockWidth + 2, this.blockWidth + 2)

        },
        end: function () {
            var x1 = (this.blockX1 - 900) / this.blockWidth
            var x2 = (this.blockX2 - 900) / this.blockWidth
            var x3 = (this.blockX3 - 900) / this.blockWidth
            var x4 = (this.blockX4 - 900) / this.blockWidth
            var y1 = Math.floor((heightArray[0][0] - this.blockY1) / this.blockWidth)
            var y2 = Math.floor((heightArray[0][0] - this.blockY2) / this.blockWidth)
            var y3 = Math.floor((heightArray[0][0] - this.blockY3) / this.blockWidth)
            var y4 = Math.floor((heightArray[0][0] - this.blockY4) / this.blockWidth)
            // debugger
            var a1 = heightArray[y1][x1]
            var a2 = heightArray[y2][x2]
            var a3 = heightArray[y3][x3]
            var a4 = heightArray[y4][x4]

            if ((a1 && a1 > 0) || (a2 && a2 > 0) || (a3 && a3 > 0) || (a4 && a4 > 0)) {
                // debugger
                heightArray[y1 + 1][x1] = 1
                heightArray[y2 + 1][x2] = 1
                heightArray[y3 + 1][x3] = 1
                heightArray[y4 + 1][x4] = 1
                return true
            }
        }
    }
    var heightArray = []
    var maxHeigth = 0
    this.block
    var score = 0

    function init() {
        var $window = $(window)
        var canvas_width = $window.width()
        var canvas_height = $window.height() - 30

        var blockWidth = Math.floor((canvas_width - 910) / 15)
        var floors = Math.floor((canvas_height - 10) / blockWidth)
        maxHeigth = canvas_height - Math.floor((canvas_height - 10 ) / blockWidth) * blockWidth
        // var blockX = (canvas_width - 910) / 2 - (canvas_width - 910) / 11 / 2 + 900
        var blockX = blockWidth * 8 + 900
        var blockY = 10

        var canvas = $('#myCanvas')[0]
        canvas.width = canvas_width
        canvas.height = canvas_height
        // heightArray = new Array
        // (canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height)
        // var floorArray = new Array()
        // for (var i = 0; i < 15; i++) {
        //     floorArray[i] = 0
        heightArray[0] = [canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height]
        // }
        // heightArray[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        for (var i = 1; i < floors + 3; i++) {
            heightArray[i] = new Array(15)
        }
        // heightArray =
        //     [canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height, canvas_height]
        var cvs = canvas.getContext("2d")

        number(cvs, canvas_height, canvas_width)
        setTimeout(function () {
            cvs.font = '100px Georgia'
            cvs.fillText('Are you Ready', 350, 350)
        }, 4000)
        setTimeout(function () {
            cvs.clearRect(0, 0, canvas_width, canvas_height)
            cvs.font = '100px Georgia'
            cvs.fillText('18岁以下儿童请闭眼', 300, 350)
        }, 5000)
        setTimeout(function () {
            cvs.clearRect(0, 0, canvas_width, canvas_height)
            cvs.font = '100px Georgia'
            cvs.fillText('Go!!!', 500, 350)
        }, 6000)
        avenger(cvs)
        setTimeout(function () {
                cvs.clearRect(0, 0, canvas_width, canvas_height)
                // canvas.addEventListener('keydown', keyFunction, true)
                window.addEventListener('keydown', keyFunction, true)

                cvs.beginPath()
                cvs.fillStyle = '#ffa4b5'
                cvs.strokeStyle = '#000000'
                // ctx.lineWidth = 2
                cvs.font = '20px Georgia'
                // cvs.fillText('分数:' + score, 800, 100)
                // cvs.font = '50px Georgia'
                // cvs.fillText('3', 100, 100)

                cvs.moveTo(900, 10)
                cvs.lineTo(900, canvas_height)
                cvs.lineTo(900 + blockWidth * 15, canvas_height)
                cvs.lineTo(900 + blockWidth * 15, 10)
                // cvs.arc(500, 200, 100, 0, 2 * Math.PI)
                // cvs.fill()
                cvs.stroke()

                cvs.beginPath()
                cvs.strokeStyle = '#ffffff'
                // ctx.lineWidth = 2
                cvs.moveTo(898, 10)
                cvs.lineTo(898, canvas_height)
                cvs.lineTo(902 + blockWidth * 15, canvas_height)
                cvs.lineTo(902 + blockWidth * 15, 10)
                // cvs.arc(500, 200, 100, 0, 2 * Math.PI)
                // cvs.fill()
                cvs.stroke()

                // while (1) {
                jsongBlock(blockX, blockY, blockWidth, cvs, canvas_height)
                // }
            }, 7000
        )


    }

    function setArray(array) {
        var a = 0
        var b = 4
        // debugger
        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[i] == array[j]) {
                    b--
                    array[i] = 0
                    break
                }
            }
            a += array[i]
        }
        a = (a - this.block.blockWidth * (b - 1) ) / b + this.block.blockWidth * b / 2
        // debugger
        return a
    }

    function number(cvs, canvas_height, canvas_width) {
        var time = 3
        var timeInterval = setInterval(function () {
            cvs.beginPath()
            cvs.clearRect(0, 0, canvas_width, canvas_height)
            cvs.fillStyle = '#ffa4b5'
            cvs.font = '600px Georgia'
            cvs.fillText(time + '', 500, 400)
            cvs.fill()
            if (time-- < 1) {
                cvs.clearRect(0, 0, canvas_width, canvas_height)
                clearInterval(timeInterval)
            }
        }, 1000)
    }

    function getNewLoc(oldX, oldY, oX, oY) {
        // var a = oldX - oX
        // var b = oldY - oY
        // if (a < 0) {
        //     var y = oY - a
        // }
        // debugger
        return {
            x: oX + (oldY - oY),
            y: oY - (oldX - oX)
        }
    }

    function keyFunction(e) {
        if (e.keyCode == 39) {
            //→
            console.log(1)
            this.block.clear()
            this.block.move(1)
        } else if (e.keyCode == 37) {
            // ←
            console.log(1)
            this.block.clear()
            this.block.move(-1)
        } else if (e.keyCode == 38) {
            this.block.clear()
            this.block.move(2)
        }
    }

    function getMaxHeigth() {
        // var array = heightArray.concat()
        for (var i = 0; i < 15; i++) {
            if (heightArray[heightArray.length - 1][i]) {
                return true
            }
        }
        // heightArray[heightArray.length - 1].map(function (item) {
        //     if (item) {
        //     }
        // })
    }

    function finishFloor() {
        var t = false
        for (var i = 1, a = 0; i < heightArray.length; i++, a = 0) {
            for (var j = 0; j < 15; j++) {
                if (heightArray[i][j] > 0) {
                    a++
                } else {
                    break
                }
            }
            if (a > 14) {
                heightArray.splice(i, 1)
                heightArray.push(new Array(15))
                // debugger
                // i--
                t = true
                score++
                console.log('大魔王的分数：' + score)
                continue
            }
            if (t) {
                break
            }
        }
        return t
    }

    var BolckKing = function (blockWidth, canvas_height, cvs) {
        this.cvs = cvs
        this.blockWidth = blockWidth
        this.canvas_height = canvas_height
    }
    BolckKing.prototype = {
        draw: function () {
            for (var i = 1; i < heightArray.length; i++) {
                for (var j = 0; j < 15; j++) {
                    if (heightArray[i][j] > 0) {
                        this.cvs.beginPath()
                        this.cvs.rect(900 + this.blockWidth * j, this.canvas_height - this.blockWidth * i, this.blockWidth, this.blockWidth)
                        switch (score) {
                            case 1:
                                this.cvs.fillText('休息一下吧!!!', 700, 30)
                                break
                            case 2:
                                this.cvs.fillText('哎呦，不错哦!!!', 700, 60)
                                break
                            case 3:
                                this.cvs.fillText('六一儿童节快乐!!!', 700, 90)
                                break
                            case 4:
                                this.cvs.fillText('什么时候能约啊!!!', 700, 120)
                                break
                            case 5:
                                this.cvs.fillText('我要崩溃了!!!', 700, 150)
                                break
                            case 6:
                                this.cvs.fillText('拒绝冷暴力!!!', 700, 180)
                                break
                            case 7:
                                this.cvs.fillText('关爱大宝宝!!!', 700, 210)
                                break
                            case 8:
                                this.cvs.fillText('该干活了哦!!!', 700, 240)
                                break
                            case 9:
                                this.cvs.fillText('老大在你后面!!!', 700, 270)
                                break
                            case 10:
                                this.cvs.fillText('还不走是吧!!!', 700, 300)
                                break
                            case 11:
                                this.cvs.fillText('在不走耍流氓了啊!!!', 700, 330)
                                break
                            case 12:
                                this.cvs.fillText('高能预警!!!', 700, 360)
                                break
                            case 13:
                                this.cvs.fillText('非战斗人员请撤离!!!', 700, 390)
                                break
                            case 14:
                                this.cvs.fillText('少儿不宜!!!', 700, 420)
                                break
                            case 15:
                                this.cvs.fillText('好奇害死猫!!!', 700, 450)
                                break
                            default:
                                this.cvs.fillText('哈哈哈哈哈哈哈哈!!!', 700, 480)
                        }

                        this.cvs.fill()
                        this.cvs.stroke()
                    }
                }
            }
        },
        clear: function () {
            // debugger
            this.cvs.beginPath()
            this.cvs.clearRect(898, 0, this.blockWidth * 15 + 4, 900)
            // this.cvs.clearRect(800, 0, 90, 50)
            this.cvs.moveTo(898, this.canvas_height)
            this.cvs.lineTo(902 + this.blockWidth * 15, this.canvas_height)
            this.cvs.stroke()
        }
    }

    function jsongBlock(blockX, blockY, blockWidth, cvs, canvas_height) {
        this.block = new Block(blockX, blockY, blockWidth, cvs)
        var si = setInterval(function () {
            this.block.down()
            // debugger
            if (this.block.end()) {
                clearInterval(si)
                if (!getMaxHeigth()) {
                    if (finishFloor()) {
                        var bolckKing = new BolckKing(blockWidth, canvas_height, cvs)
                        bolckKing.clear()
                        bolckKing.draw()
                    }
                    jsongBlock(blockX, blockY, blockWidth, cvs, canvas_height)
                }
            }
        }, 1)
    }

    var avenger = function (cvs) {
        // debugger
        setTimeout(function () {
            cvs.beginPath()
            cvs.strokeStyle = '#ffffff'
            cvs.moveTo(500, 0)
            cvs.lineTo(0, 400)
            cvs.stroke()
        }, 8000)
        setTimeout(function () {
            cvs.clearRect(0, 0, 850, 900)
            cvs.moveTo(500, 0)
            cvs.quadraticCurveTo(200, 500, 0, 500)
            cvs.stroke()
        }, 9000)
        setTimeout(function () {
            cvs.clearRect(0, 0, 850, 900)
            cvs.moveTo(500, 0)
            cvs.quadraticCurveTo(600, 200, 700, 200)
            cvs.bezierCurveTo(720,200,740,200,760,250)
            // cvs.bezierCurveTo(762,252,758,248,)
            cvs.bezierCurveTo(765,240,770,240,780,250)
            cvs.stroke()
        }, 10000)
    }

    $(function () {
        init();
    });
})(jQuery)
