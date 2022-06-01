<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TW First-bit</title>
    <link rel="stylesheet" href="assets/css/uikit.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <section>
        <div class="container">
            <div class="title">
                <h3>Онлайн конфигуратор</h3>
            </div>
            <h1>Задайте параметры стекла</h1>
            <hr>
            <form action="" class="uk-flex">
                <div class="uk-flex uk-flex-column">
                    <label for="">Укажите длину</label>
                    <input type="text" name="length" id="length" placehoder="Длина | мм">
                </div>
                <div class="uk-flex uk-flex-column">
                    <label for="">Укажите ширину</label>
                    <input type="text" name="width" id="width" placehoder="Ширина | мм">
                </div>
                <div class="uk-flex uk-flex-column">
                    <label for="">Форма стекла
                        <span>?</span>
                    </label>
                    <select name="shape" id="shape">
                        <option value="">
                            Прямоугольник
                        </option>
                        <option value="">
                            Прямоугольник
                        </option>
                    </select>
                </div>
                
            </form>
        </div>
    </section>
</body>
</html>